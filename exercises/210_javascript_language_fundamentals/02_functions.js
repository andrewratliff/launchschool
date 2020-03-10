// 01_local_vs_global1.js
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar); // logs 'This is global'

// 02_local_vs_global2.js
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction(); // logs 'This is local'

// 03_local_vs_global3.js
myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// 04_variable_lookup.js
var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction(); // logs 'This is global'

// 05_variable_scope.js
function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar); // this is global

// 06_arguments1.js
var a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// 07_arguments2.js
var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// 08_arguments3.js
// var a = [1, 2, 3];

// function myValue(b) {
//   b[2] += 7;
// }

// myValue(a);
// console.log(a);

if (true) {
  var name = 'Andrew';
}

console.log(name);

// 09_variable_declarations.js
console.log(a); // logs undefined;

var a = 1;

// hoisted code would look like this:
var a;

console.log(a); // returns undefined
a = 1;

// 10_function_declarations.js
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
