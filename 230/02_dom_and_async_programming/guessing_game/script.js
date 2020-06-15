document.addEventListener("DOMContentLoaded", () => {
  const messageElement = document.querySelector("p");
  const form = document.querySelector('form');
  const guessInput = document.querySelector('#guess');
  const newGameLink = document.querySelector('a');
  let answer;
  let message;
  let guessCount;
  let guess;

  function newGame() {
    answer = getRandomIntInclusive(1, 100)
    message = "Guess a number from 1 to 100";
    guessCount = 0;
    messageElement.textContent = message;
    console.log(answer);
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    guess = parseInt(guessInput.value, 10);

    if (answer > guess) {
      message = `My number is higher than ${guess}`;
    } else if (answer < guess) {
      message = `My number is lower than ${guess}`;
    } else if (answer === guess) {
      message = "That's a bingo";
    }

    messageElement.textContent = message;
  })

  newGameLink.addEventListener("click", event => {
    event.preventDefault();
    newGame();
  })

  newGame();
})

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
