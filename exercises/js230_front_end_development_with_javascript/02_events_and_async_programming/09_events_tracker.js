function createTracker() {
  const events = [];

  return {
    add(event) {
      events.push(event);
    },
    elements() {
      return this.list().map(event => event.target);
    },
    list() {
      return [...events];
    },
    clear() {
      events.length = 0;
    }
  }
}

const tracker = createTracker();

function track(callback) {
  return function(event) {
    tracker.add(event);
    return callback(event);
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

  // divBlue.dispatchEvent(new Event('click'));
  // divRed.dispatchEvent(new Event('click'));
  // divOrange.dispatchEvent(new Event('click'));
  // divGreen.dispatchEvent(new Event('click'));

  tracker.list().length
  tracker.elements()
  tracker.elements()[0] === document.querySelector('#blue')
  tracker.elements()[3] === document.querySelector('#green')
  tracker.clear()
  tracker.list()
  tracker.list()[0] = 'abc'
  tracker.list().length
})
