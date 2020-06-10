const container = document.querySelector('#container');
let containerDisplay = container.style.diplay;

document.querySelector('html').addEventListener('click', function() {
  document.querySelector('#container').style = 'display: none';
}, true);

document.querySelector('#container').addEventListener('click', function() {
  this.style.diplay = containerDisplay;
});

const html = document.documentElement;
const container = document.getElementById('container');
const hide = element => element.style.diplay = 'none';

html.addEventListener('click', function(target) {
  if (!container.contains(target)) {
    hide(container);
  }
});
