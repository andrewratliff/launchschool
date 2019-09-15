# frozen_string_literal: true

require 'pry'

INITIAL_MARKER = ' '
PLAYER = 'X'
COMPUTER = 'O'
WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

def prompt(string)
  puts "=> #{string}"
end

def display_board(board)
  system 'clear'
  puts ''
  puts '     |     |'
  puts "  #{board[1]}  |  #{board[2]}  |  #{board[3]}"
  puts '     |     |'
  puts '-----+-----+------'
  puts '     |     |'
  puts "  #{board[4]}  |  #{board[5]}  |  #{board[6]}"
  puts '     |     |'
  puts '-----+-----+------'
  puts '     |     |'
  puts "  #{board[7]}  |  #{board[8]}  |  #{board[9]}"
  puts '     |     |'
  puts ''
end

def initialize_board
  (1..9).each_with_object({}) do |num, board|
    board[num] = INITIAL_MARKER
  end
end

def empty_squares(board)
  board.keys.select do |num|
    board[num] == INITIAL_MARKER
  end
end

def player_moves!(board)
  square = INITIAL_MARKER
  loop do
    prompt "Choose a square (#{empty_squares(board).join(', ')})"
    square = gets.chomp.to_i
    break if empty_squares(board).include?(square)

    prompt 'Sorry, that is not a valid choice.'
  end

  board[square] = PLAYER
end

def computer_moves!(board)
  square = empty_squares(board).sample
  board[square] = COMPUTER
end

def board_full?(board)
  empty_squares(board).empty?
end

def winner?(board)
  detect_winner(board)
end

def detect_winner(board)
  winner = nil

  WINNING_LINES.each do |line|
    if line.all? { |square| board[square] == PLAYER }
      winner = 'Player'
    elsif line.all? { |square| board[square] == COMPUTER }
      winner = 'Computer'
    end
  end

  winner
end

loop do
  board = initialize_board
  display_board(board)

  loop do
    player_moves!(board)
    computer_moves!(board)
    display_board(board)

    break if board_full?(board) || winner?(board)
  end

  if winner?(board)
    prompt "#{detect_winner(board)} won!"
  else
    prompt "It's a tie!"
  end

  prompt 'Do you want to play again? (y/n)'
  break if gets.slice(0).downcase == 'n'
end
