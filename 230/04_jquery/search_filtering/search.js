document.addEventListener('DOMContentLoaded', () => {
  const gameList = document.getElementById("games");
  const filterList = document.getElementById("filters");
  const categories = new Set(games.map(game => game.category));

  games.forEach(game => {
    const li = createGameLi(game);
    li.dataset.id = game.id;
    gameList.appendChild(li);
  });

  Array.from(categories).forEach(category => {
    filterList.appendChild(createFilterLi(category));
  });

  filterList.addEventListener("change", event => {
    const category = event.target.value;
    const hidden = !event.target.checked;
    const ids = games.
      filter(game => game.category === category).
      map(game => game.id);

    [...gameList.children].forEach(game => {
      const id = parseInt(game.dataset.id, 10);

      if (ids.includes(id)) {
        game.hidden = hidden;
      }
    })
  })
});

function createGameLi(game) {
  const li = document.createElement('li');

  li.textContent = `${game.title} for ${game.category}`;

  return li;
}

function createFilterLi(category) {
  const li = document.createElement('li');
  const label = document.createElement('label');
  const input = document.createElement('input');

  label.textContent = category;
  input.setAttribute("type", "checkbox");
  input.setAttribute("value", category);
  input.checked = true;

  label.prepend(input);
  li.appendChild(label);

  return li;
}

const games = [{
  "title": "The Legend of Zelda: Majora's Mask 3D",
  "id": 1,
  "category": "Nintendo 3DS"
}, {
  "title": "Super Smash Bros.",
  "id": 2,
  "category": "Nintendo 3DS"
}, {
  "title": "Super Smash Bros.",
  "id": 3,
  "category": "Nintendo WiiU"
}, {
  "title": "LEGO Batman 3: Beyond Gotham",
  "id": 4,
  "category": "Nintendo WiiU"
}, {
  "title": "LEGO Batman 3: Beyond Gotham",
  "id": 5,
  "category": "Xbox One"
}, {
  "title": "LEGO Batman 3: Beyond Gotham",
  "id": 6,
  "category": "PlayStation 4"
}, {
  "title": "Far Cry 4",
  "id": 7,
  "category": "PlayStation 4"
}, {
  "title": "Far Cry 4",
  "id": 8,
  "category": "Xbox One"
}, {
  "title": "Call of Duty: Advanced Warfare",
  "id": 9,
  "category": "PlayStation 4"
}, {
  "title": "Call of Duty: Advanced Warfare",
  "id": 10,
  "category": "Xbox One"
}]
