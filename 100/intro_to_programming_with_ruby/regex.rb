def lab_exists(word)
  if word =~ /lab/
    puts word
  end
end

lab_exists("laboratory")
lab_exists("experiment")
lab_exists("Pans Labyrinth")
lab_exists("elaborate")
lab_exists("polar bear")
