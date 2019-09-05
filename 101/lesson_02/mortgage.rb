require 'pry'

def prompt(message)
  puts "=> #{message}"
end

def valid_float?(number)
  number.to_f.to_s == number
end

def valid_integer?(number)
  number.to_i.to_s == number
end

def get_float
  number = ''

  loop do
    number = gets.chomp

    if valid_float?(number)
      return number.to_f
    else
      prompt("Please enter a valid float.")
    end
  end
end

def get_integer
  number = ''

  loop do
    number = gets.chomp

    if valid_integer?(number)
      return number.to_i
    else
      prompt("Please enter a valid integer.")
    end
  end
end

prompt("Please enter loan amount as a float.")
loan_amount = get_float

prompt("Please enter APR as a float (10% = 0.1).")
apr = get_float

prompt("Please enter loan duration in whole years.")
loan_duration = get_integer

monthly_interest_rate = apr / 12
loan_duration_in_months = loan_duration * 12

monthly_payments = loan_amount * (monthly_interest_rate / (1 - ( 1 + monthly_interest_rate)**(-loan_duration_in_months)))

prompt("Your monthly payments will be $#{format("%02.2f", monthly_payments)}.")
