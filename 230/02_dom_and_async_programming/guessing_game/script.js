document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const input = document.querySelector('#guess');
  const paragraph = document.querySelector('p');
  const button = document.querySelector('input[type=submit]');
  let answer = newAnswer();
  let guessCount;

  function resetGame() {
    answer = newAnswer();
    guessCount = 0;
    input.value = '';
    button.disabled = false;
    paragraph.textContent = 'Guess a number between 1 and 100';
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    let guess = parseInt(input.value, 10);

    if (invalidInput(guess)) {
      return;
    }

    guessCount += 1;
    let message;

    if (guess < answer) {
      message = `My number is higher than ${guess}`;
    } else if (guess > answer) {
      message = `My number is lower than ${guess}`;
    } else {
      message = `Correct. It took you ${guessCount} guesses.`;
      button.disabled = true;
    }

    paragraph.textContent = message;
  })

  document.querySelector('a').addEventListener('click', event => {
    event.preventDefault();
    resetGame();
  })

  resetGame();
})

function newAnswer() {
  return Math.floor(Math.random() * 100) + 1;
}

function invalidInput(guess) {
  if (Number.isNaN(guess)) {
    alert('Please enter a number');
    return true;
  } else if (guess < 0 || guess > 100) {
    alert('Please enter a number between 1 and 100');
    return true;
  }

  return false;
}
