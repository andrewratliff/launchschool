let counterId;

function startCounting() {
  let start = 1;

  function logNum() {
    console.log(start);
    start += 1;
  }

  counterId  = setInterval(logNum, 1000);
}

function stopCounting() {
  clearInterval(counterId);
}

startCounting();

setTimeout(stopCounting, 10000);
