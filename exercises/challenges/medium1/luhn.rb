require "pry"

class Luhn
  def initialize(input)
    @input = input
  end

  def self.create(num)
    result = num * 10
    luhn = new(result)

    if luhn.valid?
      result
    else
      result + (10 - (luhn.checksum % 10))
    end
  end

  def addends
    result = []

    input.to_s.chars.map(&:to_i).reverse.map.with_index do |digit, index|
      if index.odd?
        new_digit = digit * 2
        result << (new_digit >= 10 ? new_digit - 9 : new_digit)
      else
        result << digit
      end
    end

    result.reverse
  end

  def checksum
    addends.sum
  end

  def valid?
    (checksum % 10).zero?
  end

  private

  attr_reader :input
end
