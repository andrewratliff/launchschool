require "pry"

class SecretHandshake
  HANDSHAKE = {
    0 => "wink",
    1 => "double blink",
    2 => "close your eyes",
    3 => "jump",
  }

  def initialize(input = "")
    @input = input
  end

  def commands
    result = []

    binary.chars.reverse.each_with_index do |char, index|
      if char == "1"
        result << HANDSHAKE[index] unless HANDSHAKE[index].nil?
      end
    end

    binary.chars.first == "1" ? result.reverse : result
  end

  private

  attr_reader :input

  def binary
    input.to_i.to_s(2).rjust(5, "0")
  end

  def invalid_input?
  end
end
