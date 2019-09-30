require "pry"

e = Enumerator.new do |n|
  binding.pry
  puts "hi"
end
