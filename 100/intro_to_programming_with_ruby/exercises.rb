require 'pry'

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

a.each { |num| p num if num > 5 }

p a.select { |num| num.odd? }

a.unshift(3)
a.push(11)
p a

a.shift
a.pop
p a

h1 = { asdf: "hello" }
h2 = { :asdf => "hello" }

p h1
p h2

h = {a:1, b:2, c:3, d:4}

puts h[:b]
h[:e] = 5
puts h

h.delete_if do |k, v|
  v < 3.5
end

p h

contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],
            ["sally@email.com", "404 Not Found Dr.", "123-234-3454"]]
contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}
info = [:email, :address, :phone]

contacts.each.with_index do |(_, hash), index|
  info.each_with_index do |item|
    hash[item] = contact_data[index].shift
  end
end

p contacts

arr = ['snow', 'winter', 'ice', 'slippery', 'salted roads', 'white trees']

arr.delete_if do |item|
  item.start_with?("s")
end

p arr

arr = ['snow', 'winter', 'ice', 'slippery', 'salted roads', 'white trees']

arr.delete_if do |item|
  # item.start_with?("s") || item.start_with?("w")
  item.start_with?("s", "w")
end

p arr

a = ['white snow', 'winter wonderland', 'melting ice',
     'slippery sidewalk', 'salted roads', 'white trees']

a.map! do |item|
  item.split
end.flatten!

p a

hash1 = {shoes: "nike", "hat" => "adidas", :hoodie => true}
hash2 = {"hat" => "adidas", :shoes => "nike", hoodie: true}

if hash1 == hash2
  puts "These hashes are the same!"
else
  puts "These hashes are not the same!"
end
