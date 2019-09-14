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

def get_hours(hours)
  if hours >= 24
    _, hours = hours.divmod(24)
  elsif hours <= -24
    _, hours = hours.divmod(24)
    hours *= -1
  end
end

def get_minutes(minutes)

end

def get_hours_and_minutes
end

def time_of_day(mins)

  if mins >= 0
    "#{hours.to_s.rjust(2, '0')}:#{minutes.to_s.rjust(2, '0')}"
  else
    "#{(24 + hours).to_s.rjust(2, '0')}:#{(minutes).to_s.rjust(2, '0')}"
  end
end

puts time_of_day(0) # == "00:00"
puts time_of_day(-3) # == "23:57"
puts time_of_day(35) == "00:35"
puts time_of_day(-1437) == "00:03"
puts time_of_day(3000) == "02:00"
puts time_of_day(800) == "13:20"
puts time_of_day(-4231) == "01:29"

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
