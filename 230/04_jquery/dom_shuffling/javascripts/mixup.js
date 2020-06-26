document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('#nav-heading');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const h1 = main.querySelector('#title');
  const baby = document.getElementById('baby');
  const chin = document.getElementById('chin');
  const figure1 = baby.parentElement;
  const figure2 = chin.parentElement;
  const article = document.querySelector('article');

  document.body.appendChild(header);
  document.body.appendChild(main);
  document.body.appendChild(footer);
  figure1.prepend(chin);
  figure2.prepend(baby);
  article.appendChild(figure1);
  article.appendChild(figure2);

  header.prepend(h1);
});
