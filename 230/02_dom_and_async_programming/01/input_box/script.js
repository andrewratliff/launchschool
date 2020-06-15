let cursorInterval;

document.addEventListener('DOMContentLoaded', () => {
  const textField = document.querySelector('.text-field');

  textField.addEventListener('click', () => {
    event.stopPropagation();
    textField.classList.add('focused');

    cursorInterval = cursorInterval || setInterval(() => {
      textField.classList.toggle('cursor');
    }, 500)
  });
})

document.addEventListener('click', () => {
  const textField = document.querySelector('.text-field');
  textField.classList.remove('focused', 'cursor');
  clearInterval(cursorInterval);
});

document.addEventListener('keydown', event => {
  const textField = document.querySelector('.text-field');
  const key = event.key;

  if (textField.classList.contains('focused')) {
    const contentDiv = textField.querySelector('.content');

    if (key === 'Backspace') {
      contentDiv.textContent = contentDiv.textContent.slice(0, -1);
    } else if (key.length === 1) {
      contentDiv.textContent += key;
    }
  }
});
