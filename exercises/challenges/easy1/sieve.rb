require "pry"

class Sieve
  def initialize(limit)
    @range = 2.upto(limit).to_a
  end

  def primes
    range.each do |prime|
      range.reject! do |num|
        prime != num && (num % prime).zero?
      end

      binding.pry
    end

    range
  end

  private

  attr_reader :range
end
