top_five_games = [
  "mario brother",
  "exite bike",
  "ring king",
  "castlevania",
  "double dragon"
]

top_five_games.each.with_index(1) do |game, index|
  puts "#{index}. #{game}"
end
