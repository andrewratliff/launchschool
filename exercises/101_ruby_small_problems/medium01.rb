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
  (2..(num.size)).each do |digit|
    result = rotate_rightmost_digits(num, -digit)
  end

  result
end

#puts max_rotation(735291) == 321579

## num = 735291
##


#puts max_rotation(3) == 3
#puts max_rotation(35) == 53
#puts max_rotation(105) == 15 # the leading zero gets dropped
#puts max_rotation(8_703_529_146) == 7_321_609_845

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

def print
end

def diamond(size)
  counter = 1

  while counter <= num
    puts ("*" * counter).center(num)
    counter += 2
  end

  counter = num

  while counter >= 0
    counter -= 2
    puts ("*" * counter).center(num)
  end
end

# diamond(1)
# diamond(9)

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
    binding.pry if word == "four."
    if WORDS_TO_NUMBERS.keys.include?(word)
      word.gsub(/#{word}/, WORDS_TO_NUMBERS[word].to_s)
    else
      word
    end
  end.join(" ")
end

# puts word_to_digit('Please call me at five five five one two three four. Thanks.') # == 'Please call me at 5 5 5 1 2 3 4. Thanks.'

# Fibonacci Numbers (Recursion)

def fib(n, start=1)

end
