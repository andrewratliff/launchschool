require "pry"

class PigLatin
  VOWEL_SOUNDS = %w[a e i o u].freeze
  AY = "ay".freeze

  def self.translate(string)
    string.split.map do |word|
      if VOWELS.include?(word.slice(0))
        word + AY
      else
        word[1..-1] + word[0] + AY
      end
    end.join(" ")
  end
end
