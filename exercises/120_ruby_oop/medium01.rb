require "pry"

# Privacy
class Machine
  def current_state
    switch
  end

  def start
    flip_switch(:on)
  end

  def stop
    flip_switch(:off)
  end

  private

  attr_accessor :switch

  def flip_switch(desired_state)
    self.switch = desired_state
  end
end

# Fixed Array

class FixedArray
  attr_accessor :array

  def initialize(size)
    @array = Array.new(size)
  end

  def []=(index, value)
    array.fetch(index)
    array[index] = value
  end

  def [](index)
    array.fetch(index)
  end

  def to_a
    array.dup
  end

  def to_s
    array.to_s
  end
end

# fixed_array = FixedArray.new(5)
# puts fixed_array[3] == nil
# puts fixed_array.to_a == [nil] * 5

# fixed_array[3] = 'a'
# puts fixed_array[3] == 'a'
# puts fixed_array.to_a == [nil, nil, nil, 'a', nil]

# fixed_array[1] = 'b'
# puts fixed_array[1] == 'b'
# puts fixed_array.to_a == [nil, 'b', nil, 'a', nil]

# fixed_array[1] = 'c'
# puts fixed_array[1] == 'c'
# puts fixed_array.to_a == [nil, 'c', nil, 'a', nil]

# fixed_array[4] = 'd'
# puts fixed_array[4] == 'd'
# puts fixed_array.to_a == [nil, 'c', nil, 'a', 'd']
# puts fixed_array.to_s == '[nil, "c", nil, "a", "d"]'

# puts fixed_array[-1] == 'd'
# puts fixed_array[-4] == 'c'

# begin
#   fixed_array[6]
#   puts false
# rescue IndexError
#   puts true
# end

# begin
#   fixed_array[-7] = 3
#   puts false
# rescue IndexError
#   puts true
# end

# begin
#   fixed_array[7] = 3
#   puts false
# rescue IndexError
#   puts true
# end

# Students

class Student
  def initialize(name, year)
    @name = name
    @year = year
  end
end

class Graduate < Student
  def initialize(name, year, parking)
    super(name, year)
    @parking = parking
  end
end

class Undergraduate < Student; end

# Circular Queue

class CircularQueue
  attr_writer :next_index

  def initialize(size)
    @size = size
    @queue = Array.new(size)
    @oldest = []
    @next_index = 0
  end

  def dequeue
    oldest_index = queue.index(oldest.first)
    queue[oldest_index] = nil
    oldest.shift
  end

  def enqueue(obj)
    queue[next_index] = obj
    update_next_index
    oldest.shift if size == oldest.size
    oldest << obj
  end

  def update_next_index
    self.next_index = (next_index + 1) % size
  end

  private

  attr_reader :next_index, :oldest, :queue, :size
end

queue = CircularQueue.new(3)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue == nil

queue = CircularQueue.new(4)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 4
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue == nil

# Stack Machine Interpretation



# Number Guesser Part 1
# Number Guesser Part 2
# Highest and Lowest Ranking Cards
# Deck of Cards
# Poker!
