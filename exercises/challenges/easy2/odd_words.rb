require "minitest/autorun"
require "pry"

class OddWords
  def initialize(input)
    @input = input
  end

  def process
    return "" if (input.empty? || input == ".")

    result = input.match(/^[^.]+/).to_s.split.map.with_index do |word, index|
      if index.odd?
        word.reverse
      else
        word
      end
    end.join(" ")

    result + "."
  end

  private

  attr_reader :input
end

class OddWordsTest < Minitest::Test
  def test_simple_input
    result = OddWords.new("whats the matter with kansas.").process

    assert_equal("whats eht matter htiw kansas.", result)
  end

  def test_with_spaces_before_period
    result = OddWords.new("  whats   the matter    with kansas   .").process

    assert_equal("whats eht matter htiw kansas.", result)
  end

  def test_empty_string
    ow = OddWords.new('')
    assert_equal("", ow.process)
  end

  def test_only_point
    ow = OddWords.new('.')
    assert_equal("", ow.process)
  end

  def test_reverses_with_two_words
    ow = OddWords.new('Hello Jemima.')
    assert_equal('Hello amimeJ.', ow.process)
  end

  def test_reverses_extra_space
    # skip
    ow = OddWords.new('Hello  Jemima')
    assert_equal('Hello amimeJ.', ow.process)
  end

  def test_reverses_single_word
    # skip
    ow = OddWords.new('Hello.')
    assert_equal('Hello.', ow.process)
  end

  def test_kansas
    # skip
    ow = OddWords.new('whats the matter with kansas.')
    assert_equal('whats eht matter htiw kansas.', ow.process)
  end

  def test_double_periods
    # skip
    ow = OddWords.new('whats the matter with kansas..')
    assert_equal('whats eht matter htiw kansas.', ow.process)
  end

  def test_space_before_point
    # skip
    ow = OddWords.new('whats the matter with kansas .')
    assert_equal('whats eht matter htiw kansas.', ow.process)
  end

  def test_two_sentences
    ow = OddWords.new('whats the matter with kansas. this isn not a thing.')
    assert_equal('whats eht matter htiw kansas.', ow.process)
  end
end
