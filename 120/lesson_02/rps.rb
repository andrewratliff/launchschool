# Rock, Paper, Scissors is a two-player game where each player chooses
# one of three possible moves: rock, paper, or scissors. The chosen moves
# will then be compared to see who wins, according to the following rules:

# - rock beats scissors
# - scissors beats paper
# - paper beats rock

# If the players chose the same move, then it's a tie.

# Nouns: player, move, rule
# Verbs: choose, compare

# Player
#   - choose
# Move
# Rule

# - compare

class Move
  VALUES = %w[rock paper scissors].freeze
  WIN_CONDITIONS = {
    'rock' => %w[scissors lizard],
    'paper' => %w[rock spock],
    'scissors' => %w[paper lizard],
    'spock' => %w[rock scissors],
    'lizard' => %w[spock paper]
  }.freeze

  attr_reader :value

  def initialize(value)
    @value = value
  end

  def beat?(other_move)
    WIN_CONDITIONS[self.value].include?(other_move.value)
  end

  def to_s
    value
  end
end

class Player
  attr_accessor :move, :name

  def initialize
    set_name
  end
end

class Human < Player
  def set_name
    input = nil
    loop do
      puts "What's your name?"
      input = gets.chomp
      break unless input.empty?

      puts 'Sorry, you must enter a value.'
    end

    self.name = input
  end

  def choose
    choice = nil

    loop do
      puts 'Please choose rock, paper, or scissors:'
      choice = gets.chomp
      break if Move::VALUES.include?(choice)

      puts 'Sorry, invalid choice.'
    end

    self.move = Move.new(choice)
  end
end

class Computer < Player
  def set_name
    self.name = %w[R2D2 Hal Chappie Sonny Number\ 5].sample
  end

  def choose
    self.move = Move.new(Move::VALUES.sample)
  end
end

class RPSGame
  attr_accessor :human, :computer

  def initialize
    @human = Human.new
    @computer = Computer.new
  end

  def play
    display_welcome_message
    loop do
      human.choose
      computer.choose
      display_winner
      break unless play_again?
    end
    display_goodbye_message
  end

  def display_welcome_message
    puts 'Welcome to Rock, Paper, Scissors!'
  end

  def display_winner
    puts "#{human.name} chose #{human.move}."
    puts "#{computer.name} chose #{computer.move}."

    if human.move.beat?(computer.move)
      puts "#{human.name} won!"
    elsif computer.move.beat?(human.move)
      puts "#{computer.name} won!"
    else
      puts "It's a tie!"
    end
  end

  def play_again?
    answer = nil
    loop do
      puts 'Would you like to play again? (y/n)?'
      answer = gets.chomp
      break if %w[y n].include?(answer.downcase)

      puts 'Please answer y or n.'
    end

    answer == 'y'
  end

  def display_goodbye_message
    puts 'Thanks for playing! Good bye!'
  end
end

RPSGame.new.play
