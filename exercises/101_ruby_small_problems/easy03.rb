# frozen_string_literal: true

require 'pry'

# # Searching 101

# def valid_number?(num)
#   num.to_i.to_s == num
# end

def prompt(string)
  puts "=> #{string}"
end

# iteration = %w[1st 2nd 3rd 4th 5th]
# first_five = []

# 5.times do |index|
#   loop do
#     prompt("Enter the #{iteration[index]} number")
#     num = gets.chomp

#     if valid_number?(num)
#       first_five << num
#       break
#     else
#       prompt('Invalid number')
#     end
#   end
# end

# prompt('Enter the last number')
# loop do
#   last_number = gets.chomp

#   if valid_number?(last_number)
#     if first_five.include?(last_number)
#       puts("The number #{last_number} appears in #{first_five}.")
#     else
#       puts("The number #{last_number} does not appear in #{first_five}.")
#     end

#     break
#   else
#     prompt('Invalid number')
#   end
# end

# # Arithmetic Integer

# prompt('Enter the first number:')
# num1 = gets.chomp
# prompt('Enter the second number:')
# num2 = gets.chomp

# prompt("#{num1} + #{num2} = #{num1.to_i + num2.to_i}")

# # Counting the Numbers of Characters

# letters = ('a'..'z').to_a + ('A'..'Z').to_a
# prompt('Please write a word or multiple words:')
# string = gets.chomp
# # characters = string.chars.keep_if { |char| letters.include?(char) }
# characters = string.split.join
# puts("There are #{characters.size} characters in \"#{string}\".")

# # Multiplying Two Numbers

# def multiply(num1, num2)
#   num1 * num2
# end

# def to_the_power_of(num, power)
#   multiply(num, to_the_power_of(num, power - 1))
# end

# def square(num)
#   multiply(num, num)
# end

# Exclusive Or

# def xor?(arg1, arg2)
#   (arg1 && !arg2) || (!arg1 && arg2)
# end

# puts xor?(5.even?, 4.even?) == true
# puts xor?(5.odd?, 4.odd?) == true
# puts xor?(5.odd?, 4.even?) == false
# puts xor?(5.even?, 4.odd?) == false

# # Odd Lists

# def oddities(array)
#   odds = []

#   array.each_with_index do |el, idx|
#     odds << el if idx.even?
#   end

#   odds
# end

# puts oddities([2, 3, 4, 5, 6]) == [2, 4, 6]
# puts oddities([1, 2, 3, 4, 5, 6]) == [1, 3, 5]
# puts oddities(['abc', 'def']) == ['abc']
# puts oddities([123]) == [123]
# puts oddities([]) == []

# # Palindromic Strings (Part 1)

def palindrome?(string)
  string == string.reverse
end

# puts palindrome?('madam') == true
# puts palindrome?('Madam') == false          # (case matters)
# puts palindrome?("madam i'm adam") == false # (all characters matter)
# puts palindrome?('356653') == true

# Palindromic Strings (Part 1)

def real_palindrome?(string)
  alphanumerics = ('a'..'z').to_a + ('A'..'Z').to_a + (0..9).to_a
  characters = string.chars.keep_if { |char| alphanumerics.include?(char) }.join
  palindrome?(characters.downcase)
end

puts real_palindrome?('madam') == true
puts real_palindrome?('Madam') == true           # (case does not matter)
puts real_palindrome?("Madam, I'm Adam") == true # (only alphanumerics matter)
puts real_palindrome?('356653') == true
puts real_palindrome?('356a653') == true
puts real_palindrome?('123ab321') == false

def palindromic_number?(num)
  palindrome?(num.to_s)
end

puts palindromic_number?(34543) == true
puts palindromic_number?(123210) == false
puts palindromic_number?(22) == true
puts palindromic_number?(5) == true
