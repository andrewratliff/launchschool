# frozen_string_literal: true

require 'pry'

# # Runaway Loop

# loop do
#   puts 'Just keep printing...'
#   break
# end

# # Loopception

# loop do
#   puts 'This is the outer loop.'

#   loop do
#     puts 'This is the inner loop.'
#     break
#   end
#   break
# end

# puts 'This is outside all loops.'

# # Control the Loop

# iterations = 1

# loop do
#   puts "Number of iterations = #{iterations}"
#   break if iterations == 5

#   iterations += 1
# end

# # Loop on Command

# loop do
#   puts 'Should I stop looping?'
#   answer = gets.chomp
#   break if answer.slice(0) == 'y'
# end

# # Say Hello

# say_hello = true
# counter = 1

# while say_hello
#   puts 'Hello!'
#   say_hello = false if counter >= 5
#   counter += 1
# end

# 5.times do
#   puts 'Hello!'
# end

# # Print While

# numbers = []

# while numbers.size < 5
#   numbers << rand(0..99)
# end

# puts numbers

# # Count Up

# count = 0

# until count == 10
#   count += 1
#   puts count
# end

# # Print Until

# numbers = [7, 9, 13, 25, 18]

# until numbers.empty?
#   puts numbers.shift
# end

# # That's Odd

# for i in 1..100
#   puts i if i.odd?
# end

# Greet Your Friends

friends = ['Sarah', 'John', 'Hannah', 'Dave']

for name in friends
  puts "Hello, #{name}!"
end
