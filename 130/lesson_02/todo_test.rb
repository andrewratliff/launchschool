require "minitest/autorun"
require "minitest/reporters"
require "pry"
require "simplecov"
Minitest::Reporters.use!
SimpleCov.start

require_relative "todo"

class TodoListTest < MiniTest::Test
  def setup
    @todo1 = Todo.new("Buy milk")
    @todo2 = Todo.new("Clean room")
    @todo3 = Todo.new("Go to gym")
    @todos = [@todo1, @todo2, @todo3]

    @list = TodoList.new("Today's Todos")
    @list.add(@todo1)
    @list.add(@todo2)
    @list.add(@todo3)
  end

  def test_to_a
    assert_equal(@todos, @list.to_a)
  end

  def test_size
    assert_equal(@todos.size, @list.size)
  end

  def test_first
    assert_equal(@todo1, @list.first)
  end

  def test_last
    assert_equal(@todo3, @list.last)
  end

  def test_shift
    todo = @list.shift
    assert_equal(todo, @todo1)
    refute_includes(@list.to_a, todo)
  end

  def test_pop
    todo = @list.pop
    assert_equal(todo, @todo3)
    refute_includes(@list.to_a, todo)
  end

  def test_done?
    refute(@list.done?)
    @list.done!
    assert(@list.done?)
  end

  def test_add
    assert_raises(TypeError) { @list.add(1) }
    assert_raises(TypeError) { @list.add([]) }
    assert_raises(TypeError) { @list.add("asdf") }
  end

  def test_shovel
    new_todo = Todo.new("Practice Ruby")

    @list << new_todo

    assert_includes(@list.to_a, new_todo)
  end

  def test_add
    new_todo = Todo.new("Practice Ruby")

    @list.add(new_todo)

    assert_includes(@list.to_a, new_todo)
  end

  def test_item_at
    assert_raises(IndexError) { @list.item_at(99) }
    assert_equal(@todo1, @list.item_at(0))
  end

  def test_mark_done_at
    assert_raises(IndexError) { @list.mark_done_at(99) }
    @list.mark_done_at(0)
    assert(@todo1.done?)
  end

  def test_mark_undone_at
    assert_raises(IndexError) { @list.mark_undone_at(99) }
    @list.mark_done_at(0)
    assert(@todo1.done?)
    @list.mark_undone_at(0)
    refute(@todo1.done?)
  end

  def test_done!
    @list.done!

    assert(@list.done?)
    @list.to_a.each do |todo|
      assert(todo.done?)
    end
  end

  def test_remove_at
    assert_raises(IndexError) { @list.remove_at(99) }
    todo = @list.remove_at(0)
    assert_equal(@todo1, todo)
    refute_includes(@list.to_a, @todo1)
  end

  def test_to_s
    output = <<~OUTPUT.chomp
      ---- Today's Todos ----
      [ ] Buy milk
      [ ] Clean room
      [ ] Go to gym
    OUTPUT

    assert_equal(output, @list.to_s)
  end

  def test_to_s2
    output = <<~OUTPUT.chomp
      ---- Today's Todos ----
      [X] Buy milk
      [ ] Clean room
      [ ] Go to gym
    OUTPUT

    @list.mark_done_at(0)

    assert_equal(output, @list.to_s)
  end

  def test_to_s3
    output = <<~OUTPUT.chomp
      ---- Today's Todos ----
      [X] Buy milk
      [X] Clean room
      [X] Go to gym
    OUTPUT

    @list.mark_all_done

    assert_equal(output, @list.to_s)
  end

  def test_each
    @list.each do |todo|
      todo.done!
    end

    assert(@list.done?)
  end

  def test_each2
    list = @list.each
    assert_equal(@list, list)
  end

  def test_select
    @list.mark_done_at(0)

    new_list = @list.select(&:done?)

    assert_equal(new_list.first, @todo1)
    refute_equal(new_list, @list)
  end
end
