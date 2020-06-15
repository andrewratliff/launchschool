document.querySelector('html').addEventListener('click', function(event) {
  const container = document.querySelector('#container')

  if (event.target !== container) {
    container.style = 'display: none';
  }
});
