// function invocation types
//
// function invocation: alert('Hello World!')
// method invocation: console.log('Hello World!')
// constructor invocation: new RegExp('\\d')
// indirect invocation: alert.call(undefined, 'Hello World!')
//
// Invocation of a function is executing the code that makes the body of a
// function, or simply calling the function.
//
// Context of an invocation is the value of `this` within a function body.
//
// Scope of a function is the set of variables, object, functions accessible
// within a function body.

// IIFE (immediately-invoked function expression):
let message = (function(name) {
  return 'Hello ' + name + '!';
})('World');

console.log(message);

// `this` is the global object in a function invocation
// the global object is determined by the execution environment
//
// In a function invocation the execution context is the global object.

function sum(a, b) {
  console.log(this === window);
  this.myNumber = 20;
  return a + b;
}

sum(15, 16);
console.log(window.myNumber);

// `this` is undefined in a function invocation in strict mode

// A common trap with function invocation is thinking that `this` is the same in
// an inner function as in the outer function.
// The context of the inner function depends only on invocation, but not on the
// outer function's context.

var numbers = {
  numberA: 5,
  numberB: 10,
  sum: function () {
    // using a local variable for this
    // let self = this;
    // function calculate() {
    //   return self.numberA + self.numberB;
    // }

    // return calculate();

    // binding the function as a function expression
    // let calculate = function() {
    //   return this.numberA + this.numberB;
    // }.bind(this);

    // return calculate();

    // calling the fucntion with an explicit context
    function calculate() {
      return this.numberA + this.numberB;
    }

    calculate.call(this);
  }
};

numbers.sum();

// Method invocation is performed when an expression the form of a property
// accessor that evaluates to a function object is followed by an open
// parenthesis.
//
// `this` is the object that owns the method in a method invocation

let calc = {
  num: 0,
  increment: function () {
    this.num += 1;
    return this.num;
  }
};

// Indirect invocation is performed when a function is called using
// `myFun.call()` or `myFun.apply()` methods.

// `this` is the first argument of `.call()` or `.apply()` in an indirect
// invocation.

// `.bind()` only returns a new function that is supposed to be invoked later
// with a pre-configured `this`.

// `this` is the first argument of a `.bind()` when invoking a bound function.

var numbers = {
  array: [3, 5, 10],
  getNumbers() {
    return this.array;
  },
};

const boundGetNumbers = numbers.getNumbers.bind(numbers);
const simpleGetNumbers = numbers.getNumbers;

// Arrow functions are designed to declare the function in a shorter form and
// lexically bind the context.

// `this` is the enclosing context where the arrow function is defined.
// The arrow function doesn't create its own execution context, but takes `this`
// from the outer function where it is defined.

// DO NOT ask yourself: where is `this` taken from?
//
// DO ask yourself: how is the function invoked?
//
// For an arrow function ask: what is `this` where the arrow function is
// defined?
