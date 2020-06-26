document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const character = this.querySelector('#key').value;
    const characterCode = character.charCodeAt(0);
    console.log(inputText);
  });

  document.querySelector('a').addEventListener('click', event => {
    event.preventDefault();
    document.getElementById('accordion').slideToggle();
  })
})
