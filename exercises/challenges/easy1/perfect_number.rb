require "minitest/autorun"

class PerfectNumber
  def self.classify(number)
    raise RuntimeError if number < 1

    if sum_of_divisors(number) == number
      "perfect"
    elsif sum_of_divisors(number) < number
      "deficient"
    elsif sum_of_divisors(number) > number
      "abundant"
    end
  end

  def self.sum_of_divisors(number)
    divisors = []

    1.upto(number - 1).each do |num|
      divisors << num if (number % num).zero?
    end

    divisors.sum
  end
end

class PerfectNumberTest < Minitest::Test
  def test_initialize_perfect_number
    assert_raises RuntimeError do
      PerfectNumber.classify(-1)
    end
  end

  def test_classify_deficient
    assert_equal "deficient", PerfectNumber.classify(13)
  end

  def test_classify_perfect
    assert_equal "perfect", PerfectNumber.classify(28)
  end

  def test_classify_abundant
    assert_equal "abundant", PerfectNumber.classify(12)
  end
end
