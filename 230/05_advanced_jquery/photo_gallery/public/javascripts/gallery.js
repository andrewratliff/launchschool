document.addEventListener("DOMContentLoaded", () => {
  const templates = {}
  const slides = document.getElementById("slides");
  const form = document.querySelector("form");
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
      currentPhotoId = photos[0].id;
    })

  function displayPhotos(photos) {
    const html = templates.photos({ photos: photos });
    slides.insertAdjacentHTML("beforeend", html)
  }

  function displayPhotoInfo(photo) {
    const html = templates.photo_information(photo);
    document.querySelector("section > header").innerHTML = html;
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

  document.querySelector("section > header").addEventListener("click", event => {
    event.preventDefault();
    const target = event.target.dataset.property;
    const id = parseInt(event.target.dataset.id, 10);
    const photo = photos.find(photo => photo.id === id);
    const body = {
      photo_id: id,
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    }
    let url;

    if (target === "likes") {
      url = "/photos/like";
    } else if (target === "favorites") {
      url = "/photos/favorite";
    }

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        photo[target] = data.total;
        displayPhotoInfo(photo);
      })
  })

  form.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(form);
    const options = {
      method: form.method,
      body: new URLSearchParams([...formData]),
    }

    fetch("/comments/new", options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  })

  function currentPhotoId() {
    const id = slides.querySelectorAll("figure").dataset.id;
    return id;
  }
});
