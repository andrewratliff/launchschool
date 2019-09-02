require 'pry'

family = {  uncles: ["bob", "joe", "steve"],
            sisters: ["jane", "jill", "beth"],
            brothers: ["frank","rob","david"],
            aunts: ["mary","sally","susan"]
          }

family.select { |k, v| k == :sisters || k == :brothers }.values.flatten

a = {a: 1,b: 2,c: 3}
b = {d: 8,e: 9,f: 20}

p "original:"
p "a: #{a}"
p "b: #{b}"
a.merge(b)
p "after merge:"
p "a: #{a}"
p "b: #{b}"
a.merge!(b)
p "after merge!:"
p "a: #{a}"
p "b: #{b}"

h = { name: 'Bob', occupation: 'web developer', hobbies: 'painting' }

p h.keys
p h.values
p h.map { |k, v| "#{k} #{v}" }

p "########################"
words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
          'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
          'flow', 'neon']

anagrams = {}

words.each do |word|
  key = word.chars.sort.join

  if anagrams.has_key?(key)
    anagrams[key] << word
  else
    anagrams[key] = [word]
  end
end

p anagrams.values
