function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  const ONE_SECOND = 1000;
  const maxTime = callbacks.length * 2;
  let elapsedTime = 0;

  function randomSecond() {
    return Math.floor(Math.random() * maxTime + 1) * ONE_SECOND;
  }

  let intervalId = setInterval(function() {
    console.log(elapsedTime += 1);

    if (elapsedTime >= maxTime) {
      clearInterval(intervalId);
    }
  }, ONE_SECOND);

  callbacks.forEach(callback => {
    setTimeout(callback, randomSecond());
  });
}

function randomizer(...callbacks) {
  const ONE_SECOND = 1000;
  const maxTime = callbacks.length * 2;
  let elapsedTime = 0;

  function randomSecond() {
    return Math.floor(Math.random() * maxTime + 1) * ONE_SECOND;
  }

  for (let i = 0; i < maxTime; i += 1) {
    elapsedTime += 1;
    setTimeout(console.log, i * 1000, elapsedTime);
  };

  callbacks.forEach(callback => setTimeout(callback, randomSecond()));
}


randomizer(callback1, callback2, callback3);
