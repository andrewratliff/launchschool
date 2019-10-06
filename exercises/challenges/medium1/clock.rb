require "minitest/autorun"
require "pry"

class Clock
  attr_reader :hour, :min
  def initialize(h, m)
    @hour = h
    @min = m
  end

  def self.at(h, m = 0)
    new(h, m)
  end

  def to_s
    "#{hour.to_s.rjust(2, '0')}:#{min.to_s.rjust(2, '0')}"
  end

  def +(m)
    h, m = m.divmod(60)
    self.min += m
    self.hour += h % 24
    self.hour = hour % 24

    self
  end

  def -(m)
    h, m = m.divmod(60)
    self.min -= m
    self.hour -= h % 24
    self.hour = hour % 24

    if min < 0
      self.hour -= 1
      self.min = 60 + min
    end

    self
  end

  def ==(other)
    hour == other.hour && min == other.min
  end

  private

  attr_writer :hour, :min
end

class ClockTest < Minitest::Test
  def test_on_the_hour
    assert_equal '08:00', Clock.at(8).to_s
    assert_equal '09:00', Clock.at(9).to_s
  end

  def test_past_the_hour
    assert_equal '11:09', Clock.at(11, 9).to_s
  end

  def test_add_a_few_minutes
    clock = Clock.at(10) + 3
    assert_equal '10:03', clock.to_s
  end

  def test_add_over_an_hour
    clock = Clock.at(10) + 61
    assert_equal '11:01', clock.to_s
  end

  def test_wrap_around_at_midnight
    clock = Clock.at(23, 30) + 60
    assert_equal '00:30', clock.to_s
  end

  def test_subtract_minutes
    clock = Clock.at(10) - 90
    assert_equal '08:30', clock.to_s
  end

  def test_equivalent_clocks
    clock1 = Clock.at(15, 37)
    clock2 = Clock.at(15, 37)
    assert_equal clock1, clock2
  end

  def test_inequivalent_clocks
    clock1 = Clock.at(15, 37)
    clock2 = Clock.at(15, 36)
    clock3 = Clock.at(14, 37)
    refute_equal clock1, clock2
    refute_equal clock1, clock3
  end

  def test_wrap_around_backwards
    clock = Clock.at(0, 30) - 60
    assert_equal '23:30', clock.to_s
  end
end
