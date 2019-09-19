# frozen_string_literal: true

require 'pry'

# Sum of Sums
def sum_of_sums(array)
  sums = []

  0.upto(array.size - 1).each do |index|
    sums << array[0..index].sum
  end

  sums.sum
end

# puts sum_of_sums([3, 5, 2]) == (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
# puts sum_of_sums([1, 5, 7, 3]) == (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
# puts sum_of_sums([4]) == 4
# puts sum_of_sums([1, 2, 3, 4, 5]) == 35

# Madlibs

# puts "Enter a noun:"
# noun = gets.chomp
# puts "Enter a verb:"
# verb = gets.chomp
# puts "Enter an adjective:"
# adjective = gets.chomp
# puts "Enter an adverb:"
# adverb = gets.chomp

# puts "Do you #{verb} your #{adjective} #{noun} #{adverb}? That's hilarous!"

# Leading Substrings

def substrings_at_start(string)
  substrings = []

  1.upto(string.size).each do |index|
    substrings << string.slice(0, index)
  end

  substrings
end

# puts substrings_at_start('abc') == ['a', 'ab', 'abc']
# puts substrings_at_start('a') == ['a']
# puts substrings_at_start('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

# All Substrings

def substrings(string)
  substrings = []

  0.upto(string.size).each do |first_index|
    1.upto(string.size - first_index).each do |second_index|
      substrings << string.slice(first_index, second_index)
    end
  end

  substrings
end

# puts substrings('abcde') == [
#   'a', 'ab', 'abc', 'abcd', 'abcde',
#   'b', 'bc', 'bcd', 'bcde',
#   'c', 'cd', 'cde',
#   'd', 'de',
#   'e'
# ]

# Palindromic Substrings

# def palindromes(string)
#   substrings = substrings(string)
#   result = []

#   substrings.each do |substring|
#     next unless substring.size > 1

#     result << substring if substring == substring.reverse
#   end

#   result
# end

# puts palindromes('abcd') == []
# puts palindromes('madam') == ['madam', 'ada']
# puts palindromes('hello-madam-did-madam-goodbye') == [
#  'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
#  'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
#  '-madam-', 'madam', 'ada', 'oo'
# ]
# puts palindromes('knitting cassettes') == [
#   'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
# ]

# fizzbuzz

# def fizzbuzz(start, finish)
#   start.upto(finish).each do |num|
#     if num % 5 == 0 && num % 3 == 0
#       puts 'FizzBuzz'
#     elsif num % 5 == 0
#       puts 'Buzz'
#     elsif num % 3 == 0
#       puts 'Fizz'
#     else
#       puts num
#     end
#   end
# end

# fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

# Double Char (Part 1)

def repeater(string)
  string.chars.each_with_object([]) { |char, result| result << char << char }.join
end

# puts repeater('Hello') == "HHeelllloo"
# puts repeater("Good job!") == "GGoooodd  jjoobb!!"
# puts repeater('') == ''

# Double Char (Part 2)

VOWELS = %w[a e i o u A E I O U].freeze
CONSONANTS = ('a'..'z').to_a + ('A'..'Z').to_a - VOWELS

def double_consonants(string)
  result = []

  string.each_char do |char|
    if CONSONANTS.include?(char)
      result << char << char
    else
      result << char
    end
  end

  result.join
end

# puts double_consonants('String') == "SSttrrinngg"
# puts double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
# puts double_consonants("July 4th") == "JJullyy 4tthh"
# puts double_consonants('') == ""

# Convert number to reversed array of digits

def reversed_number(num)
  num.to_s.reverse.to_i
end

# puts reversed_number(12345) == 54321
# puts reversed_number(12213) == 31221
# puts reversed_number(456) == 654
# puts reversed_number(12000) == 21 # No leading zeros in return value!
# puts reversed_number(12003) == 30021
# puts reversed_number(1) == 1

# Get The Middle Character

def center_of(string)
  middle = string.size / 2.0

  if string.size.even?
    return string[middle - 1] + string[middle]
  else
    return string[middle.floor]
  end
end

puts center_of('I love ruby') == 'e'
puts center_of('Launch School') == ' '
puts center_of('Launch') == 'un'
puts center_of('Launchschool') == 'hs'
puts center_of('x') == 'x'
