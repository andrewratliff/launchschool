document.addEventListener('click', event => {
  removeHighlights();

  const target = event.target;
  const article = target.closest('article');

  if (target.tagName === 'A') {
    event.preventDefault();
    const hash = target.hash;
    const article = document.querySelector(hash)
    article.classList.add('highlight');
    article.scrollIntoView();
  } else if (article) {
    article.classList.add('highlight');
  } else {
    document.querySelector('main').classList.add('highlight');
  }
});

function removeHighlights() {
  const highlighted = document.getElementsByClassName('highlight');

  [...highlighted].forEach(el => el.classList.remove('highlight'));
}
