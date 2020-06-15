const tracker = (function(items = new Set) {
  return {
    list() {
      return [...items];
    },
    elements() {
      return items.map(function(event) {
        return event.target;
      });
    },
    clear() {
      items.length = 0;
      return items.length;
    },
    add(element) {
      items.add(element);
    },
  };
})();

function track(callback) {
  return function(event) {
    tracker.add(event);
    callback(event);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const divRed = document.getElementById('red');
  const divBlue = document.getElementById('blue');
  const divOrange = document.getElementById('orange');
  const divGreen = document.getElementById('green');

  divRed.addEventListener('click', track(function(event) {
    document.body.style.background = 'red';
  }));

  divBlue.addEventListener('click', track(function(event) {
    event.stopPropagation();
    document.body.style.background = 'blue';
  }));

  divOrange.addEventListener('click', track(function(event) {
    document.body.style.background = 'orange';
  }));

  divGreen.addEventListener('click', track(function(event) {
    document.body.style.background = 'green';
  }));

  // from LS solutions
  const createClickEv   = _ => new MouseEvent('click', { view: window, bubbles: true, cancelable: true })
  const dispatchClickEv = elem => elem.dispatchEvent(createClickEv());
  [divBlue, divRed, divOrange, divGreen].forEach(dispatchClickEv)
});
