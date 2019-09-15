# frozen_string_literal: true

require 'pry'

SUITS = %w[Spades Hearts Diamonds Clubs]
ACE = 'Ace'
ROYALS = %w[King Queen Jack]
NUMBERS = ('2'..'10').to_a
CARDS = [ACE] + ROYALS + NUMBERS

def prompt(string)
  puts "=> #{string}"
end

def initialize_deck
  cards = SUITS.map do |suit|
    CARDS.map do |card|
      [card, suit]
    end
  end

  cards.flatten(1).shuffle
end

def deal!(deck)
  deck.pop
end

def value(hand)
  hand.map(&:first).reduce(0) do |total, card|
    if NUMBERS.include?(card)
      total + card.to_i
    elsif ROYALS.include?(card)
      total + 10
    elsif card == ACE && total < 11
      total + 11
    else
      total + 1
    end
  end
end

def display_hands(player_hand, dealer_hand)
  system 'clear'
  prompt 'Dealer:'
  prompt "#{dealer_hand[0][0]} of #{dealer_hand[0][1]} showing."
  prompt 'You have:'
  player_hand.each { |card| prompt "#{card[0]} of #{card[1]}" }
  prompt "Total: #{value(player_hand)}"
end

def display_final_hands(player_hand, dealer_hand)
  system 'clear'
  prompt 'Dealer:'
  dealer_hand.each { |card| prompt "#{card[0]} of #{card[1]}" }
  prompt 'You have:'
  player_hand.each { |card| prompt "#{card[0]} of #{card[1]}" }
  prompt "Dealer total: #{value(dealer_hand)}"
  prompt "Your total: #{value(player_hand)}"
end

def busted?(hand)
  value(hand) > 21
end

loop do
  deck = initialize_deck
  player_hand = []
  dealer_hand = []

  2.times do
    player_hand << deal!(deck)
    dealer_hand << deal!(deck)
  end

  loop do
    display_hands(player_hand, dealer_hand)
    prompt 'Hit or stay? (h/s)'
    break if gets.downcase.start_with?('s')

    player_hand << deal!(deck)
    break if busted?(player_hand)
  end

  if busted?(player_hand)
    display_final_hands(player_hand, dealer_hand)
    prompt 'You busted! Dealer wins!'
  else
    dealer_hand << deal!(deck) while value(dealer_hand) < value(player_hand)
    display_final_hands(player_hand, dealer_hand)

    if busted?(dealer_hand) || value(player_hand) > value(dealer_hand)
      prompt 'You win!'
    else
      prompt 'Dealer wins!'
    end
  end

  prompt 'Would you like to play again? (y/n)'
  break if gets.downcase.start_with?('n')
end

prompt 'Peace'
