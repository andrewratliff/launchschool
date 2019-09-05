# frozen_string_literal: true
require 'pry'

def prompt(message)
  puts "=> #{message}"
end

def valid_number?(number)
  number.to_i.to_s == number
end

prompt('Welcome to Calculator! Enter your name:')
name = ''
loop do
  name = gets.chomp

  if name.empty?
    prompt("Make sure you enter a valid name.")
  else
    break
  end
end

prompt("Greetings, #{name}!")

loop do
  num1 = ''
  loop do
    prompt('What is the first number?')
    num1 = gets.chomp

    if valid_number?(num1)
      num1 = num1.to_i
      break
    else
      prompt("Hmm.. That doesn't look like a valid number")
    end
  end

  num2 = ''
  loop do
    prompt('What is the second number?')
    num2 = gets.chomp

    if valid_number?(num2)
      num2 = num2.to_i
      break
    else
      prompt("Hmm.. That doesn't look like a valid number")
    end
  end

  operator_prompt = <<-MSG
What operation would you like to perform?
  a) add
  s) subtract
  m) multiply
  d) divide
  MSG

  prompt(operator_prompt)
  operation = ''

  loop do
    operation = gets.chomp.slice(0).downcase

    if %w(a s d m).include?(operation)
      break
    else
      prompt("#{name}, you must choose a valid operation")
    end
  end

  case operation
  when 'a'
    prompt("The sum is #{num1 + num2}!")
  when 's'
    prompt("The difference is #{num1 - num2}!")
  when 'm'
    prompt("The product is #{num1 * num2}!")
  when 'd'
    prompt("The quotient is #{num1.to_f / num2}!")
  end

  puts
  prompt(
    "Do you want to perform another calculation? (Press 'y' to calculate again)"
  )
  continue = gets.chomp.downcase
  break unless continue.start_with?('y')
end

puts
prompt("See you again!")
