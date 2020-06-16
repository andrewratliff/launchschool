document.addEventListener('click', event => {
  event.preventDefault();
  removeHighlights();

  if (event.target.tagName === 'A') {
    const id = event.target.href.split('#')[1];
    const article = document.getElementById(id);

    article.classList.add('highlight');
    article.scrollIntoView();
  } else {
    highlightArticleAncestor(event.target);
  }
})

function removeHighlights() {
  const highlighted = [...document.querySelectorAll('.highlight')];
  highlighted.forEach(el => el.classList.remove('highlight'));
}

function highlightArticleAncestor(element) {
  let parent = element.parentElement;

  while (parent.tagName !== 'ARTICLE' && parent !== document.body) {
    parent = parent.parentElement;
  };

  if (parent.tagName === 'ARTICLE') {
    parent.classList.add('highlight');
  }
}
