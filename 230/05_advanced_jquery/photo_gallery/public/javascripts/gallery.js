document.addEventListener("DOMContentLoaded", () => {
  const templates = {}
  const slides = document.getElementById("slides");
  let photos;

  document.querySelectorAll("script[type='text/x-handlebars']").forEach(template => {
    templates[template.id] = Handlebars.compile(template.innerHTML);
  });

  Handlebars.registerPartial("comment", templates.photo_comment);

  fetch("/photos")
    .then(response => response.json())
    .then(data => {
      photos = data;
      displayPhotos(photos);
      displayPhotoInfo(photos[0]);
      displayComments(photos[0]);
    })

  function displayPhotos(photos) {
    const html = templates.photos({ photos: photos });
    slides.insertAdjacentHTML("beforeend", html)
  }

  function displayPhotoInfo(photo) {
    const html = templates.photo_information(photo);
    document.querySelector("section > header").insertAdjacentHTML("beforeend", html)
  }

  function displayComments(photo) {
    const id = photo.id;
    fetch(`/comments?photo_id=${id}`)
      .then(response => response.json())
      .then(comments => {
        const html = templates.photo_comments({ comments: comments });
        document.querySelector("#comments ul").innerHTML = html;
      })
  }

  document.querySelector(".prev").addEventListener("click", event => {
    event.preventDefault();
    const figures = slides.querySelectorAll("figure");
    const newFigure = figures[figures.length - 1];
    const figureId = newFigure.dataset.id;

    slides.prepend(newFigure);
    displayComments(figureId);
  })

  document.querySelector(".next").addEventListener("click", event => {
    event.preventDefault();
    const figures = slides.querySelectorAll("figure");
    const newFigure = figures[1];
    const figureId = newFigure.dataset.id;

    slides.append(figures[0]);
    displayComments(figureId);
  })
});
