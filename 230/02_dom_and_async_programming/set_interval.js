// const id = setInterval(function() { console.log('hi'); }, 2000);

// 1
function startCounting() {
  let count = 0;

  return setInterval(function() { console.log(count += 1); }, 1000);
}

function stopCounting() {
  clearInterval(id);
}

const id = startCounting();

setTimeout(stopCounting, 5000);
