puts true.class
puts "hello".class
puts [1, 2, 3, "happy days"].class
puts 142.class

module Speed
  def go_fast
    puts "I am a #{self.class} and going super fast!"
  end
end

class Car
  include Speed

  def go_slow
    puts "I am safe and driving slow."
  end
end

class Truck
  include Speed

  def go_very_slow
    puts "I am a heavy truck and like going very slow."
  end
end

c = Car.new.go_fast
t = Truck.new.go_fast
