# frozen_string_literal: true

require 'pry'

class Board
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

  attr_reader :squares

  def initialize
    @squares = {}
    clean_board
  end

  def clean_board
    (1..9).each do |position|
      squares[position] = Square.new
    end
  end

  def empty_squares
    squares.select do |position, square|
      position if square.empty?
    end.keys
  end

  def empty_position_for_line(line)
    line.each do |position|
      return position if squares[position].empty?
    end

    nil
  end

  def empty_squares_string
    joinor(empty_squares)
  end

  def full?
    empty_squares.empty?
  end

  def line_full?(line)
    line.map { |position| squares[position] }.none?(&:empty?)
  end

  def set_square_at(position, marker)
    squares[position].value = marker
  end

  def winner?(player)
    WINNING_LINES.each do |line|
      return true if line.all? do |position|
        squares[position].value == player.marker
      end
    end

    false
  end

  def display
    clear
    puts ''
    puts '     |     |'
    puts "  #{squares[1]}  |  #{squares[2]}  |  #{squares[3]}"
    puts '     |     |'
    puts '-----+-----+------'
    puts '     |     |'
    puts "  #{squares[4]}  |  #{squares[5]}  |  #{squares[6]}"
    puts '     |     |'
    puts '-----+-----+------'
    puts '     |     |'
    puts "  #{squares[7]}  |  #{squares[8]}  |  #{squares[9]}"
    puts '     |     |'
    puts ''
  end

  private

  def clear
    system 'clear'
  end

  def joinor(array, delimeter = ', ', word = 'or')
    case array.size
    when 0
      ''
    when 1
      array[0]
    when 2
      array.join(" #{word} ")
    else
      array[-1] = "#{word} #{array[-1]}"
      array.join(delimeter)
    end
  end
end

class Square
  EMPTY_SQUARE = ' '

  attr_accessor :value

  def initialize(value = EMPTY_SQUARE)
    @value = value
  end

  def empty?
    value == EMPTY_SQUARE
  end

  def marked_with?(marker)
    value == marker
  end

  def to_s
    value
  end
end

class Player
  attr_reader :marker, :name, :score

  def initialize(marker)
    @marker = marker
    @score = 0
  end

  def won?(board)
    board.winner?(self)
  end

  def increment_score
    self.score += 1
  end

  def won_three?
    score == 3
  end

  def set_name(name)
    self.name = name
  end

  def set_marker(marker)
    self.marker = marker
  end

  def smart_move(board)
    defensive_move = nil

    Board::WINNING_LINES.each do |line|
      next if board.line_full?(line)

      player_count = 0
      opponent_count = 0

      line.each do |position|
        square = board.squares[position]
        next if square.empty?

        if square.marked_with?(marker)
          player_count += 1
        else
          opponent_count += 1
        end
      end

      if player_count == 2
        return board.empty_position_for_line(line)
      elsif opponent_count == 2
        defensive_move = board.empty_position_for_line(line)
      end
    end

    defensive_move
  end

  def suggested_move(board)
    smart_move = smart_move(board)

    if smart_move
      smart_move
    elsif board.empty_squares.include?(5)
      5
    else
      board.empty_squares.sample
    end
  end

  private

  attr_writer :marker, :name, :score
end

class Computer < Player
  AI_NAMES = %w[R2D2 Hal Chappie Sonny Number\ 5].freeze

  def initialize(marker)
    super
    set_name(AI_NAMES.sample)
  end

  def move(board)
    board.set_square_at(suggested_move(board), marker)
  end
end

class Human < Player
  def move(board)
    position = nil
    loop do
      puts "Choose a square: (#{board.empty_squares_string})"
      puts "Suggested move: #{suggested_move(board)}"
      position = gets.chomp.to_i
      break if board.empty_squares.include?(position)

      puts 'Sorry, that is not a valid square.'
    end

    board.set_square_at(position, marker)
  end
end

class TTTGame
  def initialize
    @board = Board.new
    @human = Human.new('X')
    @computer = Computer.new('O')
  end

  def play
    display_welcome_message

    loop do
      new_game
      break if players.any?(&:won_three?)
    end

    display_goodbye_message
  end

  def new_game
    board.clean_board

    loop do
      game_over = false

      players.each do |player|
        display_board
        player.move(board)
        game_over = true if player.won?(board) || board.full?
        break if game_over
      end

      break if game_over
    end

    display_results_and_take_score
  end

  def display_board
    board.display
    display_score
  end

  def display_results_and_take_score
    display_board

    if board.full?
      puts "It's a tie!"
    elsif human.won?(board)
      human.increment_score
      puts "#{human.name} won!"
    else
      computer.increment_score
      puts "#{computer.name} won!"
    end
  end

  def display_score
    puts "#{human.name} (#{human.marker}): #{human.score}"
    puts "#{computer.name} (#{computer.marker}): #{computer.score}"
  end

  def players
    [human, computer]
  end

  private

  attr_reader :board, :human, :computer

  def display_welcome_message
    puts 'Welcome to Tic Tac Toe!'
    puts ''

    set_human_name
    set_human_marker
  end

  def set_human_name
    name = nil

    loop do
      puts 'Please enter your name:'
      name = gets.chomp.strip
      break unless name.empty?

      puts 'Invalid name.'
    end

    human.set_name(name)
  end

  def set_human_marker
    marker = nil

    loop do
      puts 'Please choose a marker:'
      marker = gets.chomp.strip
      break unless marker.empty? || marker.size > 1

      puts 'Invalid marker.'
    end

    human.set_marker(marker)

    if marker == "O"
      computer.set_marker("X")
    end
  end

  def play_again?
    answer = nil
    loop do
      puts 'Would you like to play again?'
      answer = gets.downcase.slice(0)
      break if ['y', 'n'].include?(answer)

      puts 'Invalid answer. Please enter yes or no.'
    end

    answer == 'y'
  end

  def display_goodbye_message
    display_board
    puts ''
    puts 'Thanks for playing! Goodbye!'
  end
end

game = TTTGame.new
game.play
