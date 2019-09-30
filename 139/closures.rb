require "pry"

def print_proc(&p)
  puts p.call
end

a = 'hi'
p = Proc.new do
  a
end

a = 'hello'

binding.pry
print_proc(p)
