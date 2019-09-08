# frozen_string_literal: true

require 'pry'

def factors(number)
  divisor = number
  factors = []

  while divisor.positive?
    factors << number / divisor if (number % divisor).zero?
    divisor -= 1
  end

  factors
end

def rolling_buffer1(buffer, max_buffer_size, new_element)
  buffer << new_element
  buffer.shift if buffer.size > max_buffer_size
  buffer
end

def rolling_buffer2(input_array, max_buffer_size, new_element)
  buffer = input_array + [new_element]
  buffer.shift if buffer.size > max_buffer_size
  buffer
end

binding.pry

puts ''
