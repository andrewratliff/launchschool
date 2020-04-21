function makeHello(name) {
  var message = `Hello, ${name}!`;
  return function() {
    console.log(message);
  }
}

var helloSteve = makeHello("Steve");

// 1
var a = 34;

function add(b) {
  a += b;
}

function run() {
  var c = add(4);
}

run();
