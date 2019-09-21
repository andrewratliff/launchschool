require "pry"

class Deck
  attr_reader :cards

  def initialize
    @cards = fresh_deck.shuffle!
  end

  def deal!
    cards.pop
  end

  private

  def fresh_deck
    Card::SUITS.map do |suit|
      Card::RANKS.map do |rank|
        Card.new(rank, suit)
      end
    end.flatten(1)
  end
end

class Card
  SUITS = %w[Spades Hearts Diamonds Clubs].freeze
  ACE = "Ace".freeze
  ROYALS = %w[King Queen Jack].freeze
  NUMBERS = ("2".."10").to_a
  RANKS = [ACE] + ROYALS + NUMBERS

  attr_reader :rank, :suit

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end

  def to_s
    "#{rank} of #{suit}"
  end

  def ace?
    rank == ACE
  end

  def value
    if NUMBERS.include?(rank)
      rank.to_i
    elsif ROYALS.include?(rank)
      10
    else
      11
    end
  end
end

module Hand
  def max_value
    cards.map(&:value).sum
  end

  def possible_values
    [max_value] unless aces?

    values = []
    0.upto(ace_count) do |num|
      values << max_value - (10 * num)
    end

    values.sort
  end

  def values_under_22
    possible_values.reject { |value| value > 21 }
  end

  def total
    values_under_22.last || possible_values.first
  end

  def busted?
    possible_values.all? { |value| value > 21 }
  end

  def aces?
    cards.any?(&:ace?)
  end

  def ace_count
    cards.select(&:ace?).count
  end

  def twenty_one?
    values_under_22.any? { |value| value == 21 }
  end

  def won?(other_participant)
    return false if busted?

    total >= other_participant.total
  end
end

class Participant
  include Hand

  attr_reader :cards

  def initialize
    @cards = []
  end

  def hit(card)
    cards << card
  end

  def to_s
    values_under_22.join("/")
  end

  private

  attr_writer :cards
end

class Player < Participant
end

class Dealer < Participant
end

class TwentyOneGame
  def initialize
    @dealer = Dealer.new
    @player = Player.new
    @deck = Deck.new
  end

  def start
    deal_cards
    player_turn
    dealer_turn
    show_result
  end

  private

  attr_reader :dealer, :deck, :player

  def participants
    [dealer, player]
  end

  def deal_cards
    2.times do
      participants.each do |participant|
        participant.hit(deck.deal!)
      end
    end
  end

  def player_turn
    loop do
      show_cards
      puts ""
      puts "Would you like to hit or stay? (h/s)"
      choice = nil
      loop do
        choice = gets.downcase.chomp
        break if %w[h s].include?(choice)

        puts "Invalid choice."
      end
      break if choice == "s"

      player.hit(deck.deal!)
      break if player.busted?
    end
  end

  def dealer_turn
    loop do
      break if dealer.won?(player) || player.busted? || dealer.busted?

      dealer.hit(deck.deal!)
    end
  end

  def show_cards(show_dealer: false)
    system "clear"
    puts "Dealer:"
    if show_dealer
      dealer.cards.each { |card| puts card }
      puts "Total: #{dealer.total}"
    else
      puts dealer.cards.first
    end
    puts ""
    puts "You have:"
    player.cards.each { |card| puts card }
    puts "Total: #{player.total}"
  end

  def show_result
    show_cards(show_dealer: true)
    if player.busted? || dealer.won?(player)
      puts "You busted!" if player.busted?
      puts "House wins!"
    else
      puts "You win!"
    end
  end
end

TwentyOneGame.new.start
