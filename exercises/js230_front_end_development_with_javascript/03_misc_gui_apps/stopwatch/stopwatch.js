document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.toggle');
  const reset = document.querySelector('.reset');
  let hours = document.querySelector('.hours');
  let mins = document.querySelector('.mins');
  let secs = document.querySelector('.secs');
  let centisecs = document.querySelector('.centisecs');
  let intervalId;

  toggle.addEventListener('click', event => {
    event.preventDefault();

    if (toggle.textContent === 'Start') {
      startTimer();
    } else if (toggle.textContent === 'Stop') {
      stopTimer();
    }
  })

  reset.addEventListener('click', event => {
    event.preventDefault();
    stopTimer();

    hours.textContent = '00';
    mins.textContent = '00';
    secs.textContent = '00';
    centisecs.textContent = '00';
  })

  function startTimer() {
    toggle.textContent = 'Stop';

    let counter = parseInt(centisecs.textContent, 10);

    intervalId = setInterval(function() {
      counter += 1;

      if (counter < 100) {
        const paddedCounter = ('0' + counter).slice(-2);
        centisecs.textContent = paddedCounter;
      } else {
        counter = 0;
        incrementSecs();
      }
    }, 10);
  };

  function incrementSecs() {
    let seconds = parseInt(secs.textContent, 10) + 1;

    if (seconds < 60) {
      const paddedSeconds = ('0' + seconds).slice(-2);
      secs.textContent = paddedSeconds;
    } else {
      secs.textContent = '00';
      incrementMins();
    }
  }

  function incrementMins() {
    let minutes = parseInt(mins.textContent, 10) + 1;

    if (minutes < 60) {
      const paddedMinutes = ('0' + minutes).slice(-2);
      mins.textContent = paddedMinutes;
    } else {
      mins.textContent = '00';
      hours.textContent = parseInt(hours.textContent, 10) + 1;
    }
  }

  function stopTimer() {
    toggle.textContent = 'Start';
    clearInterval(intervalId);
  };
})
