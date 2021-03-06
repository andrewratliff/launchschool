document.addEventListener('DOMContentLoaded', () => {
  const textField = document.querySelector('.text-field');
  const content = document.querySelector('.content');
  let cursorInterval;

  textField.addEventListener('click', () => {
    textField.classList.add('focused');

    cursorInterval = cursorInterval || setInterval(() => {
      textField.classList.toggle('cursor');
    }, 500);
  });

  document.addEventListener('click', event => {
    if (event.target !== textField) {
      clearInterval(cursorInterval);
      cursorInterval = null;
      textField.classList.remove('focused');
      textField.classList.remove('cursor');
    }
  })

  document.addEventListener('keydown', event => {
    if (textField.classList.contains('focused')) {
      const key = event.key;
      const text = content.textContent;

      if (key === 'Backspace') {
        content.textContent = text.slice(0, -1);

      } else {
        content.textContent = text + key;
      }
    }
  })
})
