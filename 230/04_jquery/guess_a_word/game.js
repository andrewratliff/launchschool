document.addEventListener("DOMContentLoaded", () => {
  const apples = document.getElementById("apples");
  const message = document.getElementById("message");
  const spaces = document.getElementById("spaces");
  const guesses = document.getElementById("guesses");
  const replay = document.getElementById("replay");

  class Game {
    constructor() {
      this.maxGuesses = 6;
      this.answer = randomWord();
      this.incorrectGuesses = 0;
      this.guesses = [];
      this.word = [...Array(this.letterCount())].map(() => " ");
      this.draw();
    }

    letterCount() {
      if (this.answer) {
        return this.answer.length;
      }

      return 0;
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

      this.draw();
    }

    won() {
      return this.word.every(letter => letter !== " ");
    }

    lost() {
      return !this.won() && this.maxGuesses === this.incorrectGuesses;
    }

    draw() {
      [...spaces.querySelectorAll('span')].forEach(space => space.remove());

      this.word.forEach(letter => {
        const span = document.createElement("span");
        span.textContent = letter;
        spaces.appendChild(span);
      });

      [...guesses.querySelectorAll('span')].forEach(guess => guess.remove());

      if (this.incorrectGuesses > 0) {
        apples.classList.add(`guess_${this.incorrectGuesses}`);
      }

      this.guesses.forEach(guess => {
        const span = document.createElement("span");
        span.textContent = guess;
        guesses.appendChild(span);
      });
    }
  }

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

  const handleGuess = event => {
    if (!game.guesses.includes(event.key) && isLetter(event.charCode)) {
      game.makeGuess(event.key);
    }

    if (game.won()) {
      document.removeEventListener("keypress", handleGuess);
      message.textContent = "You won!";
    } else if (game.lost()) {
      document.removeEventListener("keypress", handleGuess);
      message.textContent = "You lost!";
    }
  }

  const isLetter = charCode => {
    return charCode >= 97 && charCode <= 122;
  }

  const newGame = event => {
    event.preventDefault();
    game = new Game();

    if (!game.answer) {
      message.textContent = "Sorry, I've run out of words!";
      document.removeEventListener("keypress", handleGuess);
    } else {
      document.addEventListener("keypress", handleGuess)
      message.textContent = "";
      apples.className = "";
    }
  }

  document.addEventListener("keypress", handleGuess)
  replay.addEventListener("click", newGame)

  let game = new Game();
});
