// 1
function makeMultipleLister(number) {
  return function() {
    for (let i = number; i < 100; i += number) {
      console.log(i);
    }
  }
}

// 2
let total = 0;

function add(number) {
  total += number;
  console.log(total);
}

function subtract(number) {
  total -= number;
  console.log(total);
}

// 3
function later(func, arg) {
  return function() {
    func(arg);
  }
}

// 4
function startup() {
  var status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

var ready = startup();
// You can't access the status variable from outside the function.
