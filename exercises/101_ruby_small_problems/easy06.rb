# frozen_string_literal: true

require 'pry'

# Cute angles
DEGREE = "\xC2\xB0"
MINUTES_PER_DEGREE = 60
SECONDS_PER_MINUTE = 60

def dms(angle)
  angle = angle.to_f
  degrees, minutes = angle.divmod(1)
  minutes = minutes * MINUTES_PER_DEGREE
  _, seconds = minutes.divmod(1)
  seconds = seconds * SECONDS_PER_MINUTE

  format("%02d#{DEGREE}%02d'%02d\"", degrees, minutes, seconds)
end

# puts dms(30) #== %(30°00'00")
# puts dms(76.73) #== %(76°43'48")
# puts dms(254.6) #== %(254°36'00")
# puts dms(93.034773) #== %(93°02'05")
# puts dms(0) #== %(0°00'00")
# puts dms(360) #== %(360°00'00") || dms(360) == %(0°00'00")

# Delete vowels

VOWELS = %w[a e i o u A E I O U].freeze

def remove_vowels(arr)
  arr.map do |string|
    string.chars.reject do |char|
      VOWELS.include?(char)
    end.join
  end
end

def remove_vowels(arr)
  arr.map { |string| string.delete('aeiouAEIOU') }
end

# puts remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
# puts remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
# puts remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']

# Fibonacci Number Location By Length

def find_fibonacci_index_by_length(length)
  index = 2
  previous = 1
  fibonacci = 1

  until fibonacci.to_s.length == length
    index += 1
    previous, fibonacci = fibonacci, fibonacci + previous
  end

  index
end

# puts find_fibonacci_index_by_length(2) == 7          # 1 1 2 3 5 8 13
# puts find_fibonacci_index_by_length(3) == 12         # 1 1 2 3 5 8 13 21 34 55 89 144
# puts find_fibonacci_index_by_length(10) == 45
# puts find_fibonacci_index_by_length(100) == 476
# puts find_fibonacci_index_by_length(1000) == 4782
# puts find_fibonacci_index_by_length(10000) == 47847

# Reversed Arrays (Part 1)

def reverse!(array)
  index = 0
  copy = array.dup

  while index < array.length
    array[index] = copy.pop
    index += 1
  end

  array
end

# list = [1,2,3,4]
# result = reverse!(list)
# puts result == [4, 3, 2, 1]
# puts list == [4, 3, 2, 1]
# puts list.object_id == result.object_id

# list = %w(a b e d c)
# puts reverse!(list) == ["c", "d", "e", "b", "a"]
# puts list == ["c", "d", "e", "b", "a"]

# list = ['abc']
# puts reverse!(list) == ["abc"]
# puts list == ["abc"]

# list = []
# puts reverse!(list) == []
# puts list == []

# Reversed Arrays (Part 2)

def reverse(array)
  array.reverse_each.with_object([]) { |element, arr| arr << element }
end

# puts reverse([1,2,3,4]) == [4,3,2,1]          # => true
# puts reverse(%w(a b e d c)) == %w(c d e b a)  # => true
# puts reverse(['abc']) == ['abc']              # => true
# puts reverse([]) == []                        # => true

list = [1, 3, 2]                      # => [1, 3, 2]
new_list = reverse(list)              # => [2, 3, 1]
list.object_id != new_list.object_id  # => true
# puts list == [1, 3, 2]                     # => true
# puts new_list == [2, 3, 1]                 # => true

# Combining Arrays

def merge(arr1, arr2)
  (arr1 + arr2).uniq
end

def merge(arr1, arr2)
  arr1 | arr2
end

# puts merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]

def halvsies(array)
  middle = (array.length.to_f / 2).ceil
  [array[0..middle - 1], array[middle..-1]]
end

# puts halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
# puts halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
# puts halvsies([5]) == [[5], []]
# puts halvsies([]) == [[], []]

# Find the Duplicate

def find_dup(array)
  array.each do |element|
    return element if array.count(element) == 2
  end
end

# puts find_dup([1, 5, 3, 1]) == 1
# puts find_dup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
#           38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
#           14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
#           78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
#           89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
#           41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
#           55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
#           85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
#           40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
#           7,  34, 57, 74, 45, 11, 88, 67,  5, 58]) == 73

# Does My List Inlucde This?

def include?(array, element)
  array.any? { |el| el == element }
end

# puts include?([1,2,3,4,5], 3) == true
# puts include?([1,2,3,4,5], 6) == false
# puts include?([], 3) == false
# puts include?([nil], nil) == true
# puts include?([], nil) == false

# Right Triangles

def triangles(num, side = 'r')
  index = 0
  justification = (side + 'just').to_sym

  while index <= num
    stars = '*' * index
    puts stars.send(justification, num)
    index += 1
  end
end

def upside_down_triangles(num)
  index = 0

  while index <= num
    stars = '*' * (num - index)
    puts stars.rjust(num)
    index += 1
  end
end

triangles(10)
triangles(5)
triangles(10, 'l')
triangles(5, 'l')
upside_down_triangles(10)
upside_down_triangles(5)
