# Boolean Assertions

require "minitest/autorun"
require "minitest/reporters"
require "pry"
Minitest::Reporters.use!

class EasyTesting < MiniTest::Test
  def test_odd
    value = 1
    assert(value.odd?)
  end

  def test_downcase
    value = "XYZ"
    assert_equal("xyz", value.downcase)
  end

  def test_nil
    value = nil
    assert_nil(value)
  end

  def test_empty
    arr = []
    assert_empty(arr)
  end

  def test_include
    value = "xyz"
    arr = [value, "abc"]
    assert_includes(arr, value)
  end

  def test_raises_error
    employee = ""
    assert_raises(NoMethodError) do
      employee.hire
    end
  end

  def test_class
    value = Numeric.new
    other_value = 1
    assert_instance_of(Numeric, value)
    refute_instance_of(Numeric, other_value)
  end

  def test_kind
    value = Numeric.new
    assert_kind_of(Numeric, value)
  end

  def test_same_object
    skip
    assert_same(list, list.process)
  end

  def test_include
    value = "xyz"
    arr = ["abc"]
    refute_includes(arr, value)
  end
end
