require "pry"

class Octal
  def initialize(input)
    @input = input
    @digits = input.chars.map(&:to_i)
  end

  def to_decimal
    return 0 if invalid_input?

    result = []

    digits.each_with_index do |digit, index|
      result << digit * (8**(digits.size - 1 - index))
    end

    result.sum
  end

  private

  def invalid_input?
    input.chars.any? { |digit| digit.match(/[^0-7]/) }
  end

  attr_reader :digits, :input
end
