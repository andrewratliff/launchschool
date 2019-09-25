# This class represents a todo item and its associated
# data: name and description. There's also a "done"
# flag to show whether this todo item is done.

require "pry"

class Todo
  DONE_MARKER = 'X'
  UNDONE_MARKER = ' '

  attr_accessor :title, :description, :done

  def initialize(title, description='')
    @title = title
    @description = description
    @done = false
  end

  def done!
    self.done = true
  end

  def done?
    done end

  def undone!
    self.done = false
  end

  def to_s
    "[#{done? ? DONE_MARKER : UNDONE_MARKER}] #{title}"
  end
end

todo1 = Todo.new("Buy milk")
todo2 = Todo.new("Clean room")
todo3 = Todo.new("Go to gym")

puts todo1
puts todo2
puts todo3

# [ ] Buy milk
# [ ] Clean room
# [ ] Go to gym

# This class represents a collection of Todo objects.
# You can perform typical collection-oriented actions
# on a TodoList object, including iteration and selection.

class TodoList
  attr_accessor :title

  def initialize(title)
    @title = title
    @todos = []
  end

  def add(todo)
    raise TypeError, "Can only add Todo objects" unless todo.is_a?(Todo)

    todos.push(todo)
  end

  alias_method :<<, :add

  def first
    todos.first
  end

  def last
    todos.last
  end

  def size
    todos.size
  end

  def to_a
    todos.dup
  end

  def done!
    todos.each(&:done!)
  end

  def done?
    todos.all?(&:done?)
  end

  def item_at(index)
    todos.fetch(index)
  end

  def mark_done_at(index)
    item_at(index).done!
  end

  def mark_undone_at(index)
    item_at(index).undone!
  end

  def shift
    todos.shift
  end

  def pop
    todos.pop
  end

  def remove_at(index)
    item_at(index)
    todos.delete_at(index)
  end

  def to_s
    todos.each(&:to_s)
  end

  def each
    todos.each do |todo|
      yield(todo)
    end

    self
  end

  def select(new_title=title)
    results = TodoList.new(new_title)

    each do |todo|
      results << todo if yield(todo)
    end

    results
  end

  def find_by_title(search_title)
    select do |todo|
      todo.title == search_title
    end.first
  end

  def all_done
    select("Done todos") do |todo|
      todo.done?
    end
  end

  def all_not_done
    select("Not done todos") do |todo|
      !todo.done?
    end
  end

  def mark_done(string)
    if find_by_title(string)
      find_by_title(string).done!
    end
  end

  def mark_all_done
    each(&:done!)
  end

  def mark_all_undone
    each(&:undone!)
  end

  private

  attr_accessor :todos
end

todo1 = Todo.new("Buy milk")
todo2 = Todo.new("Clean room")
todo3 = Todo.new("Go to gym")

list = TodoList.new("Today's Todos")
list.add(todo1)
list.add(todo2)
list.add(todo3)

todo1.done!

list.all_done

list.all_not_done
