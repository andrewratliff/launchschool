require "pry"

# Rotation (Part 1)

def rotate_array(array)
  result = array.clone
  result.push(result.slice!(0))
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

def rotate_rightmost_digits(int, n)
  result = int.to_s
  (result << result.slice!(-n)).to_i
end

puts rotate_rightmost_digits(735291, 1) == 735291
puts rotate_rightmost_digits(735291, 2) == 735219
puts rotate_rightmost_digits(735291, 3) == 735912
puts rotate_rightmost_digits(735291, 4) == 732915
puts rotate_rightmost_digits(735291, 5) == 752913
puts rotate_rightmost_digits(735291, 6) == 352917
