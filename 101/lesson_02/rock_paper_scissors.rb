# frozen_string_literal: true

require 'pry'

VALID_CHOICES = %w[rock paper scissors spock lizard].freeze
WIN_CONDITIONS = {
  'rock' => %w[scissors lizard],
  'paper' => %w[rock spock],
  'scissors' => %w[paper lizard],
  'spock' => %w[rock scissors],
  'lizard' => %w[spock paper]
}.freeze
player_score = 0
computer_score = 0

def prompt(message)
  puts "=> #{message}"
end

def win?(player1, player2)
  WIN_CONDITIONS[player1].include?(player2)
end

def display_winner(player, computer)
  if win?(player, computer)
    prompt('You won!')
  elsif win?(computer, player)
    prompt('Computer won!')
  else
    prompt("It's a tie!")
  end
end

loop do
  choice = ''
  loop do
    prompt("Choose one: #{VALID_CHOICES.join(', ')}")
    choice = gets.chomp

    break if VALID_CHOICES.include?(choice)

    prompt("That's not a valid choice.")
  end

  computer_choice = VALID_CHOICES.sample

  prompt("You chose: #{choice}, computer chose: #{computer_choice}.")

  if win?(choice, computer_choice)
    player_score += 1
  elsif win?(computer_choice, choice)
    computer_score += 1
  end

  display_winner(choice, computer_choice)

  prompt('Score:')
  prompt("player: #{player_score}")
  prompt("computer: #{computer_score}")
  # prompt('Do you want to play again? (y/n)')
  # break if gets.chomp.start_with?('n')
  break if (player_score || computer_score) == 5
end
