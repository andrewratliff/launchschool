require "pry"

# class Series
#   def initialize(digits)
#     @digits = digits
#   end

#   def slices(slice_size)
#     raise ArgumentError if slice_size > digits.size

#     result = []

#     0.upto(digits.size - slice_size).each do |index|
#       result << digits.slice(index, slice_size).chars.map(&:to_i)
#     end

#     result
#   end

#   private

#   attr_reader :digits
# end

class Series
  def initialize(digits)
    @digits = digits
  end

  def slices(slice_size)
    raise ArgumentError, "Slice is larger than string" if slice_size > digits.size

    digits.chars.map(&:to_i).each_cons(slice_size).to_a
  end

  private

  attr_reader :digits
end
