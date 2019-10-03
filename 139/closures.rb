require "pry"

test = Proc.new { some_method }

binding.pry

def print_proc(p)
  puts p.call
end

def some_method
  "asdf"
end

binding.pry
print_proc(p)
