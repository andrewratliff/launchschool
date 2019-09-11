# frozen_string_literal: true

require 'pry'

# # Short Long Short

# def short_long_short(str1, str2)
#   short, long = [str1, str2].sort_by(&:length)
#   short + long + short
# end

# puts short_long_short('abc', 'defgh') == "abcdefghabc"
# puts short_long_short('abcde', 'fgh') == "fghabcdefgh"
# puts short_long_short('', 'xyz') == "xyz"

# # What Century is That?

# def century_suffix(century)
#   last_digit = century % 10

#   if last_digit == 1 && century % 100 != 11
#     'st'
#   elsif last_digit == 2 && century % 100 != 12
#     'nd'
#   elsif last_digit == 3 && century % 100 != 13
#     'rd'
#   else
#     'th'
#   end
# end

# def century(year)
#   century, years = year.divmod(100)

#   unless years.zero?
#     century += 1
#   end

#   century.to_s + century_suffix(century)
# end

# puts century(2000) == '20th'
# puts century(2001) == '21st'
# puts century(1965) == '20th'
# puts century(256) == '3rd'
# puts century(5) == '1st'
# puts century(10103) == '102nd'
# puts century(1052) == '11th'
# puts century(1127) == '12th'
# puts century(11201) == '113th'

# Leap Years (Part 1)

def divisible_by_4?(year)
  (year % 4).zero?
end

def divisible_by_100?(year)
  (year % 100).zero?
end

def divisible_by_400?(year)
  (year % 400).zero?
end

def prior_to_gregorian_calendar?(year)
  year < 1752
end

def leap_year?(year)
  if prior_to_gregorian_calendar?(year)
    divisible_by_4?(year)
  else
    divisible_by_4?(year) && !divisible_by_100?(year) ||
      divisible_by_100?(year) && divisible_by_400?(year)
  end
end

# puts leap_year?(2016) == true
# puts leap_year?(2015) == false
# puts leap_year?(2100) == false
# puts leap_year?(2400) == true
# puts leap_year?(240000) == true
# puts leap_year?(240001) == false
# puts leap_year?(2000) == true
# puts leap_year?(1900) == false
# puts leap_year?(1752) == true
# puts leap_year?(1700) == false
# puts leap_year?(1) == false
# puts leap_year?(100) == false
# puts leap_year?(400) == true

# Leap Years (Part 2)

# puts leap_year?(2016) == true
# puts leap_year?(2015) == false
# puts leap_year?(2100) == false
# puts leap_year?(2400) == true
# puts leap_year?(240000) == true
# puts leap_year?(240001) == false
# puts leap_year?(2000) == true
# puts leap_year?(1900) == false
# puts leap_year?(1752) == true
# puts leap_year?(1700) == true
# puts leap_year?(1) == false
# puts leap_year?(100) == true
# puts leap_year?(400) == true

# # Multiples of 3 and 5

# def divisible_by_3_or_5?(num)
#   (num % 3).zero? || (num % 5).zero?
# end

# def multisum(number)
#   multiples = (1..number).to_a.keep_if { |num| divisible_by_3_or_5?(num) }

#   multiples.sum
# end

# puts multisum(3) == 3
# puts multisum(5) == 8
# puts multisum(10) == 33
# puts multisum(1000) == 234168

# Running Totals

def running_total(arr)
  arr.map.with_index do |num, index|
    if index.zero?
      num
    else
      arr[index] = num + arr[index - 1]
    end
  end
end

puts running_total([2, 5, 13]) == [2, 7, 20]
puts running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
puts running_total([3]) == [3]
puts running_total([]) == []
