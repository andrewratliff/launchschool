require "pry"
require 'minitest/autorun'
require_relative 'scrabble_score'

class Scrabble
  SCORE = {
    %w[A E I O U L N R S T] => 1,
    %w[D G] => 2,
    %w[B C M P] => 3,
    %w[F H V W Y] => 4,
    %w[K] => 5,
    %w[J X] => 8,
    %w[Q Z] => 10,
  }

  def initialize(input)
    @input = input.to_s.match(/^[a-z]+/i).to_s
  end

  def self.score(input)
    new(input).score
  end

  def score
    return 0 if (input.nil? || input.empty?)

    input.chars.map do |letter|
      letter_score(letter)
    end.sum
  end

  private

  attr_reader :input

  def letter_score(letter)
    SCORE.each do |category|
      return category[1] if category[0].include? letter.upcase
    end
  end

end

class ScrabbleTest < Minitest::Test
  def test_empty_word_scores_zero
    assert_equal 0, Scrabble.new('').score
  end

  def test_whitespace_scores_zero
    assert_equal 0, Scrabble.new(" \t\n").score
  end

  def test_nil_scores_zero
    assert_equal 0, Scrabble.new(nil).score
  end

  def test_scores_very_short_word
    assert_equal 1, Scrabble.new('a').score
  end

  def test_scores_other_very_short_word
    assert_equal 4, Scrabble.new('f').score
  end

  def test_simple_word_scores_the_number_of_letters
    assert_equal 6, Scrabble.new('street').score
  end

  def test_complicated_word_scores_more
    assert_equal 22, Scrabble.new('quirky').score
  end

  def test_scores_are_case_insensitive
    assert_equal 41, Scrabble.new('OXYPHENBUTAZONE').score
  end

  def test_convenient_scoring
    assert_equal 13, Scrabble.score('alacrity')
  end
end
