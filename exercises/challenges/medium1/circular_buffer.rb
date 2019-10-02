require "pry"

class CircularBuffer
  def initialize(buffer_size)
    @buffer_size = buffer_size
    clear
  end

  def clear
    @buffer = Array.new(buffer_size)
    @next_index = 0
    @oldest_index = 0
  end

  def read
    raise BufferEmptyException if empty?

    removed_element = buffer[oldest_index]
    buffer[oldest_index] = nil
    self.oldest_index = get_index(oldest_index)
    removed_element
  end

  def write(element)
    raise BufferFullException if full?
    return if element.nil?

    buffer[next_index] = element
    self.next_index = get_index(next_index)
  end

  def write!(element)
    return if element.nil?

    if full?
      buffer[oldest_index] = element
      self.oldest_index = get_index(oldest_index)
    else
      write(element)
    end
  end

  private

  attr_accessor :buffer, :buffer_size, :next_index, :oldest_index

  def get_index(index)
    if index + 1 == buffer_size
      0
    else
      index + 1
    end
  end

  def empty?
    buffer.all?(&:nil?)
  end

  def full?
    buffer.all? { |element| !element.nil? }
  end

  class BufferEmptyException < StandardError; end
  class BufferFullException < StandardError; end
end
