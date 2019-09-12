# frozen_string_literal: true

require 'pry'

# Practice Problems: Sorting, Nested Collections and Working with Blocks

arr = ['10', '11', '9', '7', '8']

a = arr.sort_by do |num|
  num.to_i
end.reverse

b = arr.sort do |num1, num2|
  num2.to_i <=> num1.to_i
end

# p a
# p b

books = [
  {title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967'},
  {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925'},
  {title: 'War and Peace', author: 'Leo Tolstoy', published: '1869'},
  {title: 'Ulysses', author: 'James Joyce', published: '1922'}
]

sorted_books = books.sort_by do |book|
  book[:published]
end

# p sorted_books

# arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]]
# puts 'g' == arr1[2][1][-1]
# arr2 = [{first: ['a', 'b', 'c'], second: ['d', 'e', 'f']}, {third: ['g', 'h', 'i']}]
# puts 'g' == arr2[-1][:third][0]
# arr3 = [['abc'], ['def'], {third: ['ghi']}]
# puts 'g' == arr3[-1][:third][0][0]
# hsh1 = {'a' => ['d', 'e'], 'b' => ['f', 'g'], 'c' => ['h', 'i']}
# puts 'g' == hsh1['b'][1]
# hsh2 = {first: {'d' => 3}, second: {'e' => 2, 'f' => 1}, third: {'g' => 0}}
# puts 'g' == hsh2[:third].keys[0]
# puts 'g' == hsh2[:third].key(0)

# arr1 = [1, [2, 3], 4]
# arr1[1][1] = 4
# p arr1
# arr2 = [{a: 1}, {b: 2, c: [7, 6, 5], d: 4}, 3]
# arr2[2] = 4
# p arr2
# hsh1 = {first: [1, 2, [3]]}
# hsh1[:first][2][0] = 4
# p hsh1
# hsh2 = {['a'] => {a: ['1', :two, 3], b: 4}, 'b' => 5}
# hsh2[['a']][:a][2] = 4
# p hsh2

munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

male_ages = []

munsters.each do |_, v|
  if v["gender"] == "male"
    male_ages << v["age"]
  end
end

# p male_ages
# p male_ages.sum

munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

# munsters.each do |k, v|
#   puts "#{k} is a #{v["age"]}-year-old (#{v["gender"]})."
# end

a = 2
b = [5, 8]
arr = [a, b]
[2, [5, 8]]

arr[0] += 2
arr[1][0] -= a
arr #=> [4, [3, 8]]
a #=> 2
b #=> [3, 8]

vowels = %w[a e i o u]
hsh = {first: ['the', 'quick'], second: ['brown', 'fox'], third: ['jumped'], fourth: ['over', 'the', 'lazy', 'dog']}

hsh.each_value do |words|
  words.each do |word|
    word.chars.each do |char|
      # puts char if vowels.include?(char)
    end
  end
end

arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']]

sorted_arr = arr.map do |sub_arr|
  sub_arr.sort do |a, b|
    b <=> a
  end
end

# puts sorted_arr

new_arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }].map do |hsh|
  new_hash = {}

  hsh.each do |k, v|
    new_hash[k] = v + 1
  end

  new_hash
end

# p new_arr

arr = [[2], [3, 5, 7], [9], [11, 13, 15]]
