# frozen_string_literal: true

require 'pry'

class Person
  attr_accessor :first_name, :last_name
  attr_reader :full_name

  def initialize(full_name)
    @full_name = full_name
    parse_full_name
  end

  def name
    "#{first_name} #{last_name}"
  end

  def name=(full_name)
    parse_full_name
  end

  def to_s
    name
  end

  private

  def parse_full_name
    if full_name.split.count < 1
      self.first_name = full_name
      self.last_name = ''
    else
      self.first_name, self.last_name = full_name.split
    end
  end
end

bob = Person.new('Robert Smith')
rob = Person.new('Robert Smith')
