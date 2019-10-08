require "pry"

def longest_sentence(text)
  longest = text.split(/[.!?]/).max_by(&:size)
end

# sentence = longest_sentence(File.read("./example_text.txt"))
# puts sentence
# puts sentence.split.size
