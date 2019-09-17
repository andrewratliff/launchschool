# frozen_string_literal: true

require 'pry'

# Find the Class

# puts "Hello".class
# puts 5.class
# puts [1, 2, 3].class

# Create the Class
# Create the Object
# What Are You?
# Hello, Spohie! (Part 1)

module Walkable
  def walk
    puts "Let's go for a walk!"
  end
end

class Cat
  include Walkable

  attr_accessor :name

  def initialize(name = 'Cat')
    @name = name
  end

  def greet
    puts "Hello! My name is #{name}!"
  end
end

kitty = Cat.new('Sophie')
kitty.greet
kitty.name = 'Luna'
kitty.greet
kitty.walk
