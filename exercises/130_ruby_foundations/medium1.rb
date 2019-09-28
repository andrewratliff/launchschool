require "pry"

# Listening Device

class Device
  def initialize
    @recordings = []
  end

  def record(recording)
    @recordings << recording
  end

  def listen
    record(yield) if block_given?
  end

  def play
    @recordings.each do |recording|
      puts recording
    end
  end
end

# listener = Device.new
# listener.listen { "Hello World!" }
# listener.listen
# listener.play # Outputs "Hello World!"

# Text Analyzer - Sandwich Code

class TextAnalyzer
  def process
    # open the file
    # pass the text to the block
    # block will calculate what it wants
    File.open("./sample.txt") do |text|
      yield(text.read) if block_given?
    end
  end
end

# analyzer = TextAnalyzer.new
# analyzer.process do |text|
#   puts text.split("\n\n").count
# end

# analyzer.process do |text|
#   puts text.split("\n").count
# end

# analyzer.process do |text|
#   puts text.split(" ").count
# end

# Passing Parameters Part 1

items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  puts "Let's start gathering food."
  if block_given?
    items.each { |item| yield(item) }
  else
    puts "#{items.join(', ')}"
  end
  puts "Nice selection of food we have gathered!"
end

# gather(items) do |item|
#   puts "#{item} gathered!"
# end

# Passing Parameters Part 2

def group_raptors(array)
  yield(array)
end

birds = %w(raven finch hawk eagle hummingbird)

# group_raptors(birds) do |_, _, *raptors, other|
#   p raptors
# end

# Passing Parameters Part 3

# items = ['apples', 'corn', 'cabbage', 'wheat']

# def gather(items)
#   puts "Let's start gathering food."
#   yield(items)
#   puts "We've finished gathering!"
# end

# gather(items) do |*group, wheat|
#   puts group.join(", ")
#   puts wheat
# end

# gather(items) do |apples, *group, wheat|
#   puts apples
#   puts group.join(", ")
#   puts wheat
# end

# gather(items) do |apples, *group|
#   puts apples
#   puts group.join(", ")
# end

# gather(items) do |apples, corn, cabbage, wheat|
#   puts "#{apples}, #{corn}, #{cabbage}, and #{wheat}"
# end

# Method to Proc

def convert_to_base_8(n)
  n.to_s(8).to_i
end

# The correct type of argument must be used below
base8_proc = method(:convert_to_base_8).to_proc

# We'll need a Proc object to make this code work. Replace `a_proc`
# with the correct object
# puts [8, 10, 12, 14, 16, 33].map(&base8_proc)

# Bubble Sort with Blocks

def bubble_sort!(array)
  loop do
    swapped = false
    1.upto(array.size - 1) do |index|
      if block_given?
        next if yield(array[index - 1], array[index])
      else
        next if array[index - 1] <= array[index]
      end
      array[index - 1], array[index] = array[index], array[index - 1]
      swapped = true
    end

    break unless swapped
  end
  nil
end

array = [5, 3]
bubble_sort!(array)
puts array == [3, 5]

array = [5, 3, 7]
bubble_sort!(array) { |first, second| first >= second }
puts array == [7, 5, 3]

array = [6, 2, 7, 1, 4]
bubble_sort!(array)
puts array == [1, 2, 4, 6, 7]

array = [6, 12, 27, 22, 14]
bubble_sort!(array) { |first, second| (first % 7) <= (second % 7) }
puts array == [14, 22, 12, 6, 27]

array = %w(sue Pete alice Tyler rachel Kim bonnie)
bubble_sort!(array)
puts array == %w(Kim Pete Tyler alice bonnie rachel sue)

array = %w(sue Pete alice Tyler rachel Kim bonnie)
bubble_sort!(array) { |first, second| first.downcase <= second.downcase }
puts array == %w(alice bonnie Kim Pete rachel sue Tyler)

def bubble_sort!(array)
  loop do
    swapped = false
    1.upto(array.size - 1) do |index|
      if block_given?
        first = yield(array[index - 1])
        second = yield(array[index])
        next if first <= second
      else
        next if array[index - 1] <= array[index]
      end
      array[index - 1], array[index] = array[index], array[index - 1]
      swapped = true
    end

    break unless swapped
  end
  nil
end

array = %w(sue Pete alice Tyler rachel Kim bonnie)
bubble_sort!(array) { |value| value.downcase }
array == %w(alice bonnie Kim Pete rachel sue Tyler)
