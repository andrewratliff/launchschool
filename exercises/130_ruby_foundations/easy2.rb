require "pry"

# From-To-Step Sequence Generator

def step(start_value, end_value, step_value)
  current = start_value

  while current <= end_value
    yield(current)
    current += step_value
  end

  start_value
end

# step(1, 10, 3) { |value| puts "value = #{value}" }

# Zipper

def zip(arr1, arr2)
  result = []

  0.upto(arr1.size - 1).each do |index|
    result << [arr1[index], arr2[index]]
  end

  result
end

# puts zip([1, 2, 3], [4, 5, 6]) == [[1, 4], [2, 5], [3, 6]]

# map

def map(collection)
  result = []
  return result if collection.empty?

  collection.each do |el|
    result << yield(el)
  end

  result
end

# puts map([1, 3, 6]) { |value| value**2 } == [1, 9, 36]
# puts map([]) { |value| true } == []
# puts map(['a', 'b', 'c', 'd']) { |value| false } == [false, false, false, false]
# puts map(['a', 'b', 'c', 'd']) { |value| value.upcase } == ['A', 'B', 'C', 'D']
# puts map([1, 3, 4]) { |value| (1..value).to_a } == [[1], [1, 2, 3], [1, 2, 3, 4]]
