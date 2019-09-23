# frozen_string_literal: true

require "pry"

# Welcome Stranger

def greetings(array, hash)
  name = array.join(" ")
  job = "#{hash[:title]} #{hash[:occupation]}"
  "Hello, #{name}! Nice to have a #{job} around."
end

# puts greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
# => Hello, John Q Doe! Nice to have a Master Plumber around.

# Double Doubles

def twice(num)
  first_half = num.to_s.slice(0, num.to_s.size / 2)
  second_half = num.to_s.slice(first_half.size, num.to_s.size)

  if first_half == second_half
    num
  else
    num * 2
  end
end

# puts twice(37) == 74
# puts twice(44) == 44
# puts twice(334433) == 668866
# puts twice(444) == 888
# puts twice(107) == 214
# puts twice(103103) == 103103
# puts twice(3333) == 3333
# puts twice(7676) == 7676
# puts twice(123_456_789_123_456_789) == 123_456_789_123_456_789
# puts twice(5) == 10

# Always Return

def negative(num)
  if num.positive?
    num * -1
  else
    num
  end
end

# puts negative(5) == -5
# puts negative(-3) == -3
# puts negative(0) == 0      # There's no such thing as -0 in ruby

# Counting Up

def sequence(num)
  result = []

  1.upto(num) { |n| result << n }

  result
end

def sequence(num)
  (1..num).to_a
end

# puts sequence(5) == [1, 2, 3, 4, 5]
# puts sequence(3) == [1, 2, 3]
# puts sequence(1) == [1]

# Uppercase Check

def uppercase?(string)
  string.upcase == string
end

# puts uppercase?('t') == false
# puts uppercase?('T') == true
# puts uppercase?('Four Score') == false
# puts uppercase?('FOUR SCORE') == true
# puts uppercase?('4SCORE!') == true
# puts uppercase?('') == true

# How long are you?

def word_lengths(string)
  words = string.split

  words.map do |word|
    "#{word} #{word.length}"
  end
end

# puts word_lengths("cow sheep chicken") == ["cow 3", "sheep 5", "chicken 7"]

# puts word_lengths("baseball hot dogs and apple pie") ==
# ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

# puts word_lengths("It ain't easy, is it?") == ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

# puts word_lengths("Supercalifragilisticexpialidocious") ==
# ["Supercalifragilisticexpialidocious 34"]

# puts word_lengths("") == []

# Name Swapping

def swap_name(name)
  first, last = name.split
  "#{last}, #{first}"
end

# puts swap_name('Joe Roberts') == 'Roberts, Joe'

# Sequence Count

def sequence(count, start)
  result = []
  num = 0

  count.times do
    result << num + start
    num += start
  end

  result
end

def sequence(count, start)
  (1..count).map { |num| num * start }
end

# puts sequence(5, 1) == [1, 2, 3, 4, 5]
# puts sequence(4, -7) == [-7, -14, -21, -28]
# puts sequence(3, 0) == [0, 0, 0]
# puts sequence(0, 1000000) == []

# Grade book

def get_grade(*args)
  avg = (args.sum.to_f / args.count).round

  case
  when avg >= 90
    "A"
  when avg >= 80
    "B"
  when avg >= 70
    "C"
  when avg >= 60
    "D"
  else
    "F"
  end
end

# puts get_grade(95, 90, 93) == "A"
# puts get_grade(50, 50, 95) == "D"

# Grocery List

def buy_fruit(groceries)
  groceries.map { |item| [item[0]] * item[1] }.flatten
end

puts buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]]) ==
  ["apples", "apples", "apples", "orange", "bananas","bananas"]
