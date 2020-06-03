// 1
document.querySelector('#primary_heading').setAttribute('class', 'heading');

// 2
document.querySelector('ul').setAttribute('class', 'bulleted');
document.getElementById('list').setAttribute('class', 'bulleted');

// 3
const link = document.getElementById('toggle');
const element = document.getElementById('notice');

link.onclick = function(e) {
  e.preventDefault;
  element.classList.toggle('hidden');
};

// 4
element.onclick = function(e) {
  e.preventDefault;

  this.classList.add('hidden');
};

// 5
const mult = document.getElementById('multiplication');
mult.innerText = 13 * 9;

// 6
document.body.id = 'styled';
document.body.setAttribute('id', 'styled');
