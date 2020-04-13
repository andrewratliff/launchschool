// 1
// In a browswer environment, what object serves as the implicit execution
// context?
// window

// 2
a = 10;

console.log(window.a === a); // log true in a browswer

// 3
function func() {
  var b = 1;
}

func();

console.log(b); // Throws a ReferenceError since b is declared in a function scope

// 4
function func() {
  c = 1;
}

func();

console.log(c); // Logs 1; b is created as a propery on the global object,
                // despite the fact that it's initialzed in function scope.

// 5
var a = 1;
b = 'Hi there';
var c = '-50';

delete a; // false
delete b; // true
delete c; // false
// undeclared global variables can be deleted, but not declared global variables

// 6
function func() {
  console.log("I'm a function!");
}

delete func; // false
// a functino declaration effectively declares a new variable and assigns a
// function to it. Since we're declaring a variable, it can't be deleted.

// 7
window.a = 1;
b = 2;
var c = b;

delete window.a; // true
delete window.b; // true
delete window.c; // false
