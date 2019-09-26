require "pry"

# Enumerable Class Creation

class Tree
  include Enumerable

  def each

  end
end

# Optional Blocks

def compute(num)
  if block_given?
    yield(num)
  else
    num
  end
end

# puts compute { 5 + 3 } == 8
# puts compute { 'a' + 'b' } == 'ab'
# puts compute == 'Does not compute.'

# puts compute(3) { |n| n + 10 } == 13
# puts compute(-10) { |n| n + 10 } == 0
# puts compute(6) == 6

# Find Missing Numbers

def missing(array)
  full_range = (array.first..array.last).to_a
  full_range - array
end

# puts missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
# puts missing([1, 2, 3, 4]) == []
# puts missing([1, 5]) == [2, 3, 4]
# puts missing([6]) == []

# Divisors

def divisors(num)
  results = []
  half_way = (num ** 0.5 ).ceil

  1.upto(half_way).each do |n|
    if (num % n).zero?
      results << n
      results << num / n
    end
  end

  results.uniq.sort
end

# puts divisors(1) == [1]
# puts divisors(7) == [1, 7]
# puts divisors(12) == [1, 2, 3, 4, 6, 12]
# puts divisors(98) == [1, 2, 7, 14, 49, 98]
# puts divisors(99400891) == [1, 9967, 9973, 99400891] # may take a minute

# Encrypted Pioneers
pioneers = ["Nqn Ybirynpr",
            "Tenpr Ubccre",
            "Nqryr Tbyqfgvar",
            "Nyna Ghevat",
            "Puneyrf Onoontr",
            "Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv",
            "Wbua Ngnanfbss",
            "Ybvf Unvog",
            "Pynhqr Funaaba",
            "Fgrir Wbof",
            "Ovyy Tngrf",
            "Gvz Orearef-Yrr",
            "Fgrir Jbmavnx",
            "Xbaenq Mhfr",
            "Fve Nagbal Ubner",
            "Zneiva Zvafxl",
            "Lhxvuveb Zngfhzbgb",
            "Unllvz Fybavzfxv",
            "Tregehqr Oynapu",
]

def unrot(array)
  keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  values = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"

  rot = keys.chars.each_with_object({}).with_index do |(key, hsh), index|
    hsh[key] = values.chars[index]
  end

  array.map do |name|
    name.split.map do |string|
      string.chars.map do |char|
        rot[char]
      end.join
    end.join(" ")
  end
end

# puts unrot(pioneers)

# Iterators: True for Any?

def any?(collection)
  collection.each do |el|
    return true if yield(el)
  end

  false
end

# puts any?([1, 3, 5, 6]) { |value| value.even? } == true
# puts any?([1, 3, 5, 7]) { |value| value.even? } == false
# puts any?([2, 4, 6, 8]) { |value| value.odd? } == false
# puts any?([1, 3, 5, 7]) { |value| value % 5 == 0 } == true
# puts any?([1, 3, 5, 7]) { |value| true } == true
# puts any?([1, 3, 5, 7]) { |value| false } == false
# puts any?([]) { |value| true } == false

# Iterators: True for All?

def all?(collection)
  collection.each do |el|
    return false unless yield(el)
  end

  true
end

# puts all?([1, 3, 5, 6]) { |value| value.odd? } == false
# puts all?([1, 3, 5, 7]) { |value| value.odd? } == true
# puts all?([2, 4, 6, 8]) { |value| value.even? } == true
# puts all?([1, 3, 5, 7]) { |value| value % 5 == 0 } == false
# puts all?([1, 3, 5, 7]) { |value| true } == true
# puts all?([1, 3, 5, 7]) { |value| false } == false
# puts all?([]) { |value| false } == true

# Iterators: True for None?

def none?(collection)
  collection.each do |el|
    return false if yield(el)
  end

  true
end

# puts none?([1, 3, 5, 6]) { |value| value.even? } == false
# puts none?([1, 3, 5, 7]) { |value| value.even? } == true
# puts none?([2, 4, 6, 8]) { |value| value.odd? } == true
# puts none?([1, 3, 5, 7]) { |value| value % 5 == 0 } == false
# puts none?([1, 3, 5, 7]) { |value| true } == false
# puts none?([1, 3, 5, 7]) { |value| false } == true
# puts none?([]) { |value| true } == true

# Iterators: True for One?

def one?(collection)
  found = []

  collection.each do |el|
    found << el if yield(el)
    return false if found.size > 1
  end

  found.size == 1
end

# puts one?([1, 3, 5, 6]) { |value| value.even? }    # -> true
# puts one?([1, 3, 5, 7]) { |value| value.odd? }     # -> false
# puts one?([2, 4, 6, 8]) { |value| value.even? }    # -> false
# puts one?([1, 3, 5, 7]) { |value| value % 5 == 0 } # -> true
# puts one?([1, 3, 5, 7]) { |value| true }           # -> false
# puts one?([1, 3, 5, 7]) { |value| false }          # -> false
# puts one?([]) { |value| true }                     # -> false

# Count Items

def count(collection)
  count = 0

  collection.each do |el|
    count += 1 if yield(el)
  end

  count
end

def count(collection)
  collection.inject(0) { |count, el| yield(el) ? count += 1 : count }
end

puts count([1,2,3,4,5]) { |value| value.odd? } == 3
puts count([1,2,3,4,5]) { |value| value % 3 == 1 } == 2
puts count([1,2,3,4,5]) { |value| true } == 5
puts count([1,2,3,4,5]) { |value| false } == 0
puts count([]) { |value| value.even? } == 0
puts count(%w(Four score and seven)) { |value| value.size == 5 } == 2
