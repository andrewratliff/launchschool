document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const form = document.querySelector("form");

  form.addEventListener("submit", event => {
    event.preventDefault();
    const shape = createShape(new FormData(form));
    canvas.appendChild(shape);
  })

  document.getElementById("animate").addEventListener("click", event => {
    event.preventDefault();
    [...canvas.querySelectorAll("div")].forEach(animateElement);
  })

  document.getElementById("stop").addEventListener("click", event => {
    event.preventDefault();
    stopAnimations();
  })
});

function stopAnimations() {
  [...canvas.querySelectorAll("div")].forEach(element => {
    window.cancelAnimationFrame(element.dataset.animationId);
  });
}

function animateElement(element) {
  const startX = parseInt(element.dataset.startX, 10);
  const startY = parseInt(element.dataset.startY, 10);
  const endX = parseInt(element.dataset.endX, 10);
  const endY = parseInt(element.dataset.endY, 10);
  const duration = parseInt(element.dataset.duration, 10);

  resetElement(element);
  animate({
    duration: duration,
    timing: function(timeFraction) {
      return timeFraction;
    },
    draw: function(progress) {
      const x = startX + ((endX - startX) * progress);
      const y = startY + ((endY - startY) * progress);
      element.style.left = x + 'px';
      element.style.top = y + 'px';
    },
    element
  });
}

function animate({timing, draw, duration, element}) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      element.dataset.animationId = requestAnimationFrame(animate);
    }
  });
}

function resetElement(element) {
  const startX = element.dataset.startX;
  const startY = element.dataset.startY;

  element.style.top = `${startX}px`;
  element.style.left = `${startY}px`;
}

function createShape(formData) {
  const shape = document.createElement('div');
  const shapeType = formData.get('shape_type').toLowerCase();
  const startX = formData.get('start_x');
  const startY = formData.get('start_y');
  const endX = formData.get('end_x');
  const endY = formData.get('end_y');
  const duration = formData.get('duration');

  shape.classList.add(shapeType);
  shape.dataset.startX = startX;
  shape.dataset.startY = startY;
  shape.dataset.endX = endX;
  shape.dataset.endY = endY;
  shape.dataset.duration = duration;

  resetElement(shape);

  return shape;
}
