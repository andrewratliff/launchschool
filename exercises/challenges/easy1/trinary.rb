require "pry"

class Trinary
  def initialize(input)
    @input = input
  end

  def to_decimal
    return 0 if invalid_input?

    result = []

    input.chars.map(&:to_i).reverse.each_with_index do |digit, index|
      result << digit * (3**index)
    end

    result.sum
  end

  private

  attr_reader :input

  def invalid_input?
    input.match(/[^0-2]/)
  end
end
