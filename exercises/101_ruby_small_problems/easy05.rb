# frozen_string_literal: true

require 'pry'

# ASCII String Value

def ascii_value(str)
  str.chars.map(&:ord).sum
end

# puts ascii_value('Four score') == 984
# puts ascii_value('Launch School') == 1251
# puts ascii_value('a') == 97
# puts ascii_value('') == 0

# After Midnight (Part 1)

MINUTES_PER_HOUR = 60
HOURS_PER_DAY = 24
MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR

def time_of_day(mins)
  hours, minutes = mins.divmod(60)

  if hours > 24
    _, hours = hours.divmod(24)
  elsif  hours < -24
    _, hours = hours.divmod(-24)
  end

  if mins >= 0
    "#{hours.to_s.rjust(2, '0')}:#{minutes.to_s.rjust(2, '0')}"
  else
    "#{(24 + hours).to_s.rjust(2, '0')}:#{(minutes).to_s.rjust(2, '0')}"
  end
end

def time_of_day(delta_minutes)
  delta_minutes = delta_minutes % MINUTES_PER_DAY
  hours, minutes = delta_minutes.divmod(MINUTES_PER_HOUR)
  format('%02d:%02d', hours, minutes)
end

# puts time_of_day(0) == "00:00"
# puts time_of_day(-3) == "23:57"
# puts time_of_day(35) == "00:35"
# puts time_of_day(-1437) == "00:03"
# puts time_of_day(3000) == "02:00"
# puts time_of_day(800) == "13:20"
# puts time_of_day(-4231) == "01:29"

# After Midnight (Part 2)

def after_midnight(time)
  hours, minutes = time.split(':').map(&:to_i)

  ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY
end

def before_midnight(time)
  hours, minutes = time.split(':')

  (MINUTES_PER_DAY - ((hours.to_i * 60) + minutes.to_i)) % MINUTES_PER_DAY
end

# puts after_midnight('00:00') == 0
# puts before_midnight('00:00') == 0
# puts after_midnight('12:34') == 754
# puts before_midnight('12:34') == 686
# puts after_midnight('24:00') == 0
# puts before_midnight('24:00') == 0

# Letter Swap

def swap(words)
  words.split.map do |word|
    # first_char = word[0]
    # last_char = word[-1]

    # word[0] = last_char
    # word[-1] = first_char
    word[0], word[-1] = word[-1], word[0]

    word
  end.join(' ')
end

# puts swap('Oh what a wonderful day it is') == 'hO thaw a londerfuw yad ti si'
# puts swap('Abcde') == 'ebcdA'
# puts swap('a') == 'a'

def cleanup(string)
  alphabet = ('a'..'z').to_a
  clean_characters = []

  string.chars.each do |char|
    if alphabet.include?(char)
      clean_characters << char
    else
      clean_characters << ' ' unless clean_characters.last == ' '
    end
  end

  clean_characters.join
end

def cleanup(string)
  string.gsub(/[^a-z]/i, ' ').squeeze(' ')
end

# puts cleanup("---what's my +*& line?") == ' what s my line '

# Letter Counter (Part 1)

def word_sizes(words)
  hash = {}

  words.split.each do |word|
    size = word.size
    if hash.key?(size)
      hash[size] += 1
    else
      hash[size] = 1
    end
  end

  hash
end

# puts word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 1, 6 => 1 }
# puts word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 1, 7 => 2 }
# puts word_sizes("What's up doc?") == { 6 => 1, 2 => 1, 4 => 1 }
# puts word_sizes('') == {}

# Letter Count (Part 2)
def word_sizes(words)
  sizes = Hash.new(0)

  words.split.each do |word|
    size = word.gsub(/[^a-z]/i, '').size
    sizes[size] += 1
  end

  sizes
end

# puts word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 2 }
# puts word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 3 }
# puts word_sizes("What's up doc?") == { 5 => 1, 2 => 1, 3 => 1 }
# puts word_sizes('') == {}

WORDS = %w[zero one two three four five six seven eight nine ten eleven twelve
            thirteen fourteen fifteen sixteen seventeen eighteen nineteen]
NUMBERS = (0..19).to_a
NUMBERS_TO_WORDS = NUMBERS.zip(WORDS).to_h
WORDS_TO_NUMBERS = WORDS.zip(NUMBERS).to_h

def alphabetic_number_sort(arr)
  sorted_words = arr.map { |num| NUMBERS_TO_WORDS[num] }.sort
  sorted_words.map { |word| WORDS_TO_NUMBERS[word] }
end

def alphabetic_number_sort(numbers)
  numbers.sort_by { |number| WORDS[number] }
end

def alphabetic_number_sort(numbers)
  numbers.sort { |num1, num2| WORDS[num1] <=> WORDS[num2] }
end

# puts alphabetic_number_sort((0..19).to_a) == [
#   8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17,
#   6, 16, 10, 13, 3, 12, 2, 0
# ]

def crunch(string)
  result = []

  string.chars.each do |char|
    result << char unless char == result.last
  end

  result.join
end

# puts crunch('ddaaiillyy ddoouubbllee') == 'daily double'
# puts crunch('4444abcabccba') == '4abcabcba'
# puts crunch('ggggggggggggggg') == 'g'
# puts crunch('a') == 'a'
# puts crunch('') == ''

# Bannerizer

def print_in_box(string)
  size = string.size

  border = '+-' + '-' * size + '-+'
  white_space = '| ' + ' ' * size + ' |'

  puts border
  puts white_space
  puts '| ' + string + ' |'
  puts white_space
  puts border
end

# print_in_box('To boldly go where no one has gone before.')
# print_in_box('')

# Spin Me Around In Circles

def spin_me(str)
  str.split.each do |word|
    word.reverse!
  end.join(" ")
end

word = "hello world"
# p spin_me(word).object_id
# p word.object_id

# It's a different string object since the
