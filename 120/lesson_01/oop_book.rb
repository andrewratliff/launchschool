# frozen_string_literal: true

require 'pry'

# The Object Model

module Talk
  def say_hi
    puts 'hi'
  end
end

class MyClass
  include Talk
end

new_obj = MyClass.new
new_obj.say_hi

# Classes and Objects I

# class MyCar
#   attr_accessor :speed, :color
#   attr_reader :year

#   def initialize(year, color, model)
#     @year = year
#     @color = color
#     @model = model
#     @speed = 0
#   end

#   def speed_up
#     self.speed += 10
#   end

#   def break
#     self.speed -= 10
#   end

#   def shut_off
#     self.speed = 0
#   end

#   def spray_paint(color)
#     self.color = color
#   end
# end

# car = MyCar.new(2019, "Black", "Tesla")

# Classes and Objects II

# class MyCar
#   attr_accessor :speed, :color
#   attr_reader :year

#   def initialize(year, color, model)
#     @year = year
#     @color = color
#     @model = model
#     @speed = 0
#   end

#   def self.gas_mileage(miles, gallons)
#     miles / gallons
#   end

#   def to_s
#     "#{color} #{year} #{model}"
#   end

#   def speed_up
#     self.speed += 10
#   end

#   def break
#     self.speed -= 10
#   end

#   def shut_off
#     self.speed = 0
#   end

#   def spray_paint(color)
#     self.color = color
#   end
# end

# Inheritance

class Vehicle
  @@number_of_vehicles = 0

  attr_accessor :speed, :color
  attr_reader :year, :model, :number_of_vehicles

  def initialize(year, color, model)
    @year = year
    @color = color
    @model = model
    @speed = 0
    @@number_of_vehicles += 1
  end

  def self.gas_mileage(miles, gallons)
    miles / gallons
  end

  def to_s
    "#{color} #{year} #{model}"
  end

  def speed_up
    self.speed += 10
  end

  def break
    self.speed -= 10
  end

  def shut_off
    self.speed = 0
  end

  def spray_paint(color)
    self.color = color
  end

  def self.number_of_vehicles
    "There are #{@@number_of_vehicles} vehicles."
  end

  def age
    "Your #{model} is #{calulate_age} years old."
  end

  private

  def calulate_age
    Time.now.year - year
  end
end

module Towable
  def can_tow?(kilos)
    kilos < 1000 ? true : false
  end
end

class MyCar < Vehicle
  NUMBER_OF_DOORS = 4
end

class MyTruck < Vehicle
  NUMBER_OF_DOORS = 2

  include Towable
end

car = MyCar.new(1999, 'Green', 'Toyota')
truck = MyTruck.new(2018, 'Purple', 'Ford')

class Student
  attr_reader :name

  def initialize(name, grade)
    @name = name
    @grade = grade
  end

  def better_grade_than?(other_student)
    self.grade > other_student.grade
  end

  protected

  attr_reader :grade
end

bob = Student.new('bob', 90)
joe = Student.new('joe', 80)

puts "Well done!" if joe.better_grade_than?(bob)
puts "Well done!" if bob.better_grade_than?(joe)

Car.number_of_vehicles
