// 1
function makeMultipleLister(number) {
  return function() {
    for(let i = number; i <= 100; i += number) {
      if (i % number === 0) {
        console.log(i);
      }
    }
  }
}

var lister = makeMultipleLister(13);
// console.log(lister());

// 2
let total = 0;

function add(number) {
  total += number;

  return total;
}

function subtract(number) {
  total -= number;

  return total;
}

// 3
function later(func, arg) {
  return function() {
    return func(arg);
  };
}

// var logWarning = later(console.log, 'The system is shutting down!');
// logWarning();

// 4
function startup() {
  var status = 'ready';

  return function() {
    console.log('The system is ready.');
  };
}

var ready = startup();
// var systemStatus = we can't change or read the value of status from
// the startup function
