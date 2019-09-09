flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]

flintstones_hash = flintstones.each_with_object({}).with_index do |(name, hash), index|
  hash[name] = index
end

flintstones_hash = {}

flintstones.each_with_index do |name, index|
  flintstones_hash[name] = index
end

# puts flintstones_hash

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }

total = 0

ages.each do |_, v|
  total += v
end

# puts total
# puts ages.values.sum
# puts ages.values.inject(&:+)

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }
ages.reject! { |_, v| v >= 100 }
# puts ages

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }
# puts ages.values.sort.first
# puts ages.values.min

flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
# flintstones.each_with_index do |name, index|
#   if name.slice(0, 2) == 'Be'
#     puts index
#     break
#   end
# end

# flintstones.index do |name|
#   name.slice(0, 2) == 'Be'
# end

flintstones = %w[Fred Barney Wilma Betty BamBam Pebbles]
# puts flintstones.map! { |name| name.slice(0, 3) }

statement = "The Flintstones Rock"
occurences = {}
statement.split.join.chars.each do |char|
  if occurences[char]
    occurences[char] += 1
  else
    occurences[char] = 1
  end
end

# puts occurences

def titleize(sentence)
  title = sentence.split.map do |word|
    word.capitalize
  end

  title.join(' ')
end

words = "the flintstones rock"
# puts titleize(words)

munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

munsters.each do |name, attributes|
  age = attributes['age']

  if age < 18
    attributes['age_group'] = 'kid'
  elsif age < 65
    attributes['age_group'] = 'adult'
  else
    attributes['age_group'] = 'senior'
  end
end

p munsters
