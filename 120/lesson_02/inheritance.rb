# frozen_string_literal: true

require 'pry'

class Pet
  def swim
    'swimming!'
  end

  def run
    'running!'
  end

  def jump
    'jumping!'
  end
end

class Dog < Pet
  def speak
    'bark!'
  end

  def fetch
    'fetching!'
  end
end

class Bulldog < Dog
  def swim
    "can't swim"
  end
end

class Cat < Pet
  def speak
    'meow!'
  end
end

teddy = Dog.new
puts teddy.speak           # => "bark!"
puts teddy.swim           # => "swimming!"

karl = Bulldog.new
puts karl.speak           # => "bark!"
puts karl.swim            # => "can't swim!"


pete = Pet.new
kitty = Cat.new
dave = Dog.new
bud = Bulldog.new

puts pete.run                # => "running!"
puts # pete.speak              # => NoMethodError
puts
puts kitty.run               # => "running!"
puts kitty.speak             # => "meow!"
puts # kitty.fetch             # => NoMethodError
puts
puts dave.speak              # => "bark!"
puts
puts bud.run                 # => "running!"
puts bud.swim                # => "can't swim!"
