require "pry"

# Rotation (Part 1)

def rotate_array(array)
  array[1..-1] + [array[0]]
end

def rotate_string(string)
  rotate_array(string.chars)
end

# puts rotate_array([7, 3, 5, 2, 9, 1]) == [3, 5, 2, 9, 1, 7]
# puts rotate_array(['a', 'b', 'c']) == ['b', 'c', 'a']
# puts rotate_array(['a']) == ['a']

# x = [1, 2, 3, 4]
# rotate_array(x) == [2, 3, 4, 1]   # => true
# puts x == [1, 2, 3, 4]                 # => true

# Rotation (Part 2)

def rotate_rightmost_digits(number, n)
  all_digits = number.to_s.chars
  all_digits[-n..-1] = rotate_array(all_digits[-n..-1])
  all_digits.join.to_i
end

# puts rotate_rightmost_digits(735291, 1) == 735291
# puts rotate_rightmost_digits(735291, 2) == 735219
# puts rotate_rightmost_digits(735291, 3) == 735912
# puts rotate_rightmost_digits(735291, 4) == 732915
# puts rotate_rightmost_digits(735291, 5) == 752913
# puts rotate_rightmost_digits(735291, 6) == 352917

# Rotation (Part 3)

def max_rotation(num)
  num.to_s.size.downto(2).each do |n|
    num = rotate_rightmost_digits(num, n)
  end

  num
end

# puts max_rotation(735291) == 321579
# puts max_rotation(3) == 3
# puts max_rotation(35) == 53
# puts max_rotation(105) == 15 # the leading zero gets dropped
# puts max_rotation(8_703_529_146) == 7_321_609_845

# 1000 Lights

def lights(num_switches)
  lights = [false] * num_switches

  1.upto(num_switches) do |n|
    lights.each_with_index do |light, index|
      if ((index + 1) % n).zero?
        lights[index] = !light
      end
    end
  end

  lights
end

# arr = []
# lights(1000).each.with_index(1) do |light, index|
#   arr << index if light
# end

# puts arr

# Diamonds!

def diamond(odd_num)
  counter = 1

  while counter <= odd_num
    if counter > 1
      puts ("*" + (" " * (counter - 2)) + "*").center(odd_num)
    else
      puts "*".center(odd_num)
    end
    # puts ("*" * counter).center(odd_num)
    counter += 2
  end

  counter = odd_num - 2

  while counter >= 0
    if counter > 1
      puts ("*" + (" " * (counter - 2)) + "*").center(odd_num)
    else
      puts "*".center(odd_num)
    end
    # puts ("*" * counter).center(odd_num)
    counter -= 2
  end
end

# diamond(1)
# diamond(9)

# Stack Machine Interpretation

def minilang(input)
  stack = []
  register = 0

  input.split.each do |item|
    case item
    when "PRINT"
      puts register
    when "PUSH"
      stack << register
    when "MULT"
      register *= stack.pop
    when "ADD"
      register += stack.pop
    when "POP"
      register = stack.pop
    when "SUB"
      register -= stack.pop
    when "DIV"
      register /= stack.pop
    when "MOD"
      register %= stack.pop
    else
      register = item.to_i
    end
  end
end

# minilang('PRINT')
# 0

# minilang('5 PUSH 3 MULT PRINT')
# 15

# minilang('5 PRINT PUSH 3 PRINT ADD PRINT')
# 5
# 3
# 8

# minilang('5 PUSH POP PRINT')
# 5

# minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
# 5
# 10
# 4
# 7

# minilang('3 PUSH PUSH 7 DIV MULT PRINT ')
# 6

# minilang('4 PUSH PUSH 7 MOD MULT PRINT ')
# 12

# minilang('-3 PUSH 5 SUB PRINT')
# 8

# minilang('6 PUSH')
# (nothing printed; no PRINT commands)

# Word to Digit

WORDS_TO_NUMBERS = {
  "zero" => 0,
  "one" => 1,
  "two" => 2,
  "three" => 3,
  "four" => 4,
  "five" => 5,
  "six" => 6,
  "seven" => 7,
  "eight" => 8,
  "nine" => 9,
}

def word_to_digit(string)
  string.split.map do |word|
    if WORDS_TO_NUMBERS.keys.include?(word)
      word.gsub(/#{word}/, WORDS_TO_NUMBERS[word].to_s)
    else
      word
    end
  end.join(" ")
end

# LS solution
def word_to_digit(words)
  WORDS_TO_NUMBERS.keys.each do |word|
    words.gsub!(/\b#{word}\b/, WORDS_TO_NUMBERS[word].to_s)
  end

  words
end

# puts word_to_digit('Please call me at five five five one two three four. Thanks.') # == 'Please call me at 5 5 5 1 2 3 4. Thanks.'

# Fibonacci Numbers (Recursion)

def fib(num, sum = 0, count = 1)
  puts "***"
  puts "num: #{num}"
  puts "sum: #{sum}"
  puts "count: #{count}"
  if sum.zero?
    sum += count
  else
    sum += sum
  end

  return sum if count == num

  count += 1
  fib(num, sum, count)
end

# puts fib(1)
puts fib(3)
