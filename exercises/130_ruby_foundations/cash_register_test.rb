require "minitest/autorun"
require "minitest/reporters"
require "pry"
Minitest::Reporters.use!

require_relative "cash_register"
require_relative "transaction"

class CashRegisterTest < Minitest::Test
  def test_accept_money
    cash_register = CashRegister.new(0)
    transaction = Transaction.new(10)
    transaction.amount_paid = 10

    cash_register.accept_money(transaction)

    assert_equal(10, cash_register.total_money)
  end

  def test_change
    cash_register = CashRegister.new(0)
    transaction = Transaction.new(10)
    transaction.amount_paid = 100

    change = cash_register.change(transaction)

    assert_equal(90, change)
  end

  def test_give_receipt
    cash_register = CashRegister.new(0)
    cost = 10
    transaction = Transaction.new(cost)

    assert_output("You've paid $#{cost}.\n") do
      cash_register.give_receipt(transaction)
    end
  end

  def test_prompt_for_payment
    input = StringIO.new("10\n")
    output = StringIO.new
    transaction = Transaction.new(10)

    transaction.prompt_for_payment(input: input, output: output)

    assert_equal(10, transaction.amount_paid)
  end
end
