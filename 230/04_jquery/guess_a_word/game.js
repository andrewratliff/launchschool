const randomWord = (() => {
  const words = ['apple', 'banana', 'pear']

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return function() {
    if (words.length === 0) {
      return;
    }

    const max = words.length;
    const index = getRandomInt(0, max);

    return words.splice(index, 1)[0];
  }
})();

class Game {
  constructor() {
    this.maxGuesses = 6;
    this.answer = randomWord();
    this.incorrectGuesses = 0;
    this.guesses = [];
    this.word = [...Array(this.answer.length)].map(() => " ");
  }

  makeGuess(guess) {
    this.guesses.push(guess);

    if (this.answer.includes(guess)) {
      this.word = this.word.map((letter, index) => {
        if (this.answer[index] === guess) {
          return guess;
        } else {
          return letter;
        }
      });
    } else {
      this.incorrectGuesses += 1;
    }
  }

  won() {
    return this.word.every(letter => letter !== " ");
  }

  lost() {
    return !this.won() && this.maxGuesses === this.incorrectGuesses;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const apples = document.getElementById("apples");
  const message = document.getElementById("message");
  const spaces = document.getElementById("spaces");
  const guesses = document.getElementById("guesses");

  let game = new Game();
  console.log(game.word);

  document.addEventListener("keypress", event => {
    if (!game.guesses.includes(event.key)) {
      game.makeGuess(event.key);
      updateSpaces();
      updateGuesses();
    }

    if (game.won()) {
      message.textContent = "You won!";
    } else if (game.lost()) {
      message.textContent = "You lost!";
    }
  })

  function updateSpaces() {
    [...spaces.querySelectorAll('span')].forEach(space => space.remove());

    game.word.forEach(letter => {
      const span = document.createElement("span");
      span.textContent = letter;
      spaces.appendChild(span);
    });
  }

  function updateGuesses() {
    [...guesses.querySelectorAll('span')].forEach(guess => guess.remove());

    if (game.incorrectGuesses > 0) {
      apples.classList.add(`guess_${game.incorrectGuesses}`);
    }

    game.guesses.forEach(guess => {
      const span = document.createElement("span");
      span.textContent = guess;
      guesses.appendChild(span);
    });
  }

  updateSpaces();
  updateGuesses();
});
