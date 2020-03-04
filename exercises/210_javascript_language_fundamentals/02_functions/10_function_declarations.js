// logValue();

// function logValue() {
//   console.log('Hello, World!');
// }

// further exploration

var logValue = 'foo';

function logValue() {
  console.log('Hello, World!');
}

console.log(typeof logValue); // logs 'string'

// hoisted code would look like this:

function logValue() {
  console.log('Hello, World!');
}

logValue = 'foo'

console.log(typeof logValue);
