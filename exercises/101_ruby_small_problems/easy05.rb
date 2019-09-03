require 'pry'

# Spin Me Around In Circles

def spin_me(str)
  str.split.each do |word|
    word.reverse!
  end.join(" ")
end

word = "hello world"
p spin_me(word)
p word
