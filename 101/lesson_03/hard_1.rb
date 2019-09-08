require 'pry'

if false
  greeting = 'hello world'
end

puts greeting

# local vars in `if` statements are initalized to nil even if the block is never
# executed

greetings = { a: 'hi' }
informal_greeting = greetings[:a]
informal_greeting << ' there'

puts informal_greeting #  => "hi there"
puts greetings # => {a: 'hi there'}

def dot_separated_ip_address?(input_string)
  dot_separated_words = input_string.split(".")

  return false if dot_separated_words.size != 4

  while dot_separated_words.size > 0 do
    word = dot_separated_words.pop
    unless is_an_ip_number?(word)
      return false
    end
  end
  true
end
