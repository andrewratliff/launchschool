# frozen_string_literal: true
require 'pry'

# Repeat Yourself

def repeat(str, number)
  number.times do
    puts str
  end
end

# repeat('Hello', 3)

# Odd

def odd?(number)
  number.remainder(2) != 0
end

# puts odd?(2)
# puts odd?(5)
# puts odd?(-17)
# puts odd?(-8)
# puts odd?(0)
# puts odd?(7)

# List of Digits

def digit_list(number)
  number.to_s.chars.map(&:to_i)
end

# puts digit_list(12_345) == [1, 2, 3, 4, 5] # => true
# puts digit_list(7) == [7] # => true
# puts digit_list(375_290) == [3, 7, 5, 2, 9, 0] # => true
# puts digit_list(444) == [4, 4, 4] # => true

# How Many?

def count_occurrences(vehicles)
  occurrences = {}

  vehicles.each do |vehicle|
    if occurrences.key?(vehicle)
      occurrences[vehicle] += 1
    else
      occurrences[vehicle] = 1
    end
  end

  occurrences
end

# vehicles = %w[car car truck car SUV truck motorcycle motorcycle car truck]
# p count_occurrences(vehicles)

# Reverse It (Part 1)

def reverse_sentence(str)
  str.split.reverse.join(' ')
end

# puts reverse_sentence('') == ''
# puts reverse_sentence('Hello World') == 'World Hello'
# puts reverse_sentence('Reverse these words') == 'words these Reverse'

# Reverse It (Part 1)

def reverse_words(str)
  str.split.map do |word|
    if word.length > 4
      word.reverse
    else
      word
    end
  end.join(' ')
end

# puts reverse_words('Professional')          # => lanoisseforP
# puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
# puts reverse_words('Launch School')         # => hcnuaL loohcS

# Stringy Strings

def stringy(number, starting_num = 1)
  result = []

  number.times do |index|
    num = index.even? ? starting_num : (starting_num - 1).abs
    result << num
  end

  result.join
end

# puts stringy(6) == '101010'
# puts stringy(9) == '101010101'
# puts stringy(4) == '1010'
# puts stringy(7) == '1010101'

# puts stringy(6, 0)
# puts stringy(9, 0)
# puts stringy(4, 0)
# puts stringy(7, 0)

# Array Average

def average(array)
  array.sum / array.size.to_f
end

# puts average([1, 5, 87, 45, 8, 8])
# puts average([9, 47, 23, 95, 16, 52])

# Sum of Digits

def sum(number)
  number.to_s.chars.map(&:to_i).sum
end

# puts sum(23) == 5
# puts sum(496) == 19
# puts sum(123_456_789) == 45

# What's my Bonus?

def calculate_bonus(salary, should_receive_bonus)
  if should_receive_bonus
    salary / 2
  else
    0
  end
end

# puts calculate_bonus(2800, true) == 1400
# puts calculate_bonus(1000, false) == 0
# puts calculate_bonus(50000, true) == 25000
