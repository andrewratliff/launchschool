# frozen_string_literal: true

require 'pry'

# Combine Two Lists

# def interleave(arr1, arr2)
#   new_arr = []

#   0.upto(arr1.size - 1) do |index|
#     new_arr << arr1[index]
#     new_arr << arr2[index]
#   end

#   new_arr
# end

def interleave(arr1, arr2)
  arr1.zip(arr2).flatten
end

# puts interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']

# Lettercase Counter

UPPERCASE = ('A'..'Z').to_a
LOWERCASE = ('a'..'z').to_a

def letter_case_count(string)
  result = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  }

  string.chars.each do |char|
    if UPPERCASE.include?(char)
      result[:uppercase] += 1
    elsif LOWERCASE.include?(char)
      result[:lowercase] += 1
    else
      result[:neither] += 1
    end
  end

  result
end

# puts letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
# puts letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
# puts letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
# puts letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }

# Capitalize Words
LOWER_TO_UPPER = LOWERCASE.zip(UPPERCASE).to_h
UPPER_TO_LOWER = UPPERCASE.zip(LOWERCASE).to_h

def word_cap(string)
  string.split.map(&:capitalize).join(' ')
end

def word_cap(string)
  string.split.map do |word|
    word.slice(0).upcase + word.slice(1..-1).downcase
  end.join(' ')
end

# puts word_cap('four score and seven') == 'Four Score And Seven'
# puts word_cap('the javaScript language') == 'The Javascript Language'
# puts word_cap('this is a "quoted" word') == 'This Is A "quoted" Word'

# Swap Case


def swapcase(string)
  string.chars.map do |char|
    if UPPERCASE.include?(char)
      UPPER_TO_LOWER[char]
    elsif LOWERCASE.include?(char)
      LOWER_TO_UPPER[char]
    else
      char
    end
  end.join
end

# puts swapcase('CamelCase') == 'cAMELcASE'
# puts swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'

# Staggered Caps (Part 1)

def staggered_case(string)
  string.chars.map.with_index(1) do |char, index|
    if index.odd?
      char.upcase
    else
      char.downcase
    end
  end.join
end

# puts staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
# puts staggered_case('ALL_CAPS') == 'AlL_CaPs'
# puts staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'

# Staggered Caps (Part 2)

ALPHABET = UPPERCASE + LOWERCASE

def staggered_case(string)
  index = 1
  result = []

  string.chars.each do |char|
    result << if index.odd?
                char.upcase
              else
                char.downcase
              end

    index += 1 if ALPHABET.include?(char)
  end

  result.join
end

# puts staggered_case('I Love Launch School!') == 'I lOvE lAuNcH sChOoL!'
# puts staggered_case('ALL CAPS') == 'AlL cApS'
# puts staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 nUmBeRs'

# Multiplicative Average

def show_multiplicative_average(array)
  product = array.inject(&:*)
  divisor = array.size.to_f

  puts "The result if #{format('%.3f', (product / divisor))}"
end

# show_multiplicative_average([3, 5])
# The result is 7.500

# show_multiplicative_average([6])
# The result is 6.000

# show_multiplicative_average([2, 5, 7, 11, 13, 17])
# The result is 28361.667

# Multiply Lists

def multiply_list(arr1, arr2)
  arr1.map.with_index do |element, index|
    element * arr2[index]
  end
end

def multiply_list(arr1, arr2)
  arr1.zip(arr2).map { |el1, el2| el1 * el2 }
end

# puts multiply_list([3, 5, 7], [9, 10, 11]) == [27, 50, 77]

# Multiply All Pairs

def multiply_all_pairs(arr1, arr2)
  result = []

  arr1.each do |arr1_el|
    arr2.each do |arr2_el|
      result << arr1_el * arr2_el
    end
  end

  result.sort
end

def multiply_all_pairs(arr1, arr2)
  arr1.product(arr2).map { |el1, el2| el1 * el2 }.sort
end

# puts multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]

# The End Is Near But Not Here

def penultimate(string)
  string.split[-2]
end

def middle_word(string)
  words = string.split
  middle_index = (words.size / 2.0).round - 1
  words[middle_index]
end

# puts penultimate('last word') == 'last'
# puts penultimate('Launch School is great!') == 'is'
puts middle_word('last word')
puts middle_word('Launch School is great!')
puts middle_word('Launch School is really great!')
