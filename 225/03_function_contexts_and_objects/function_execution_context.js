function foo() {
  return 'this here is: ' + this;
}

foo(); // "this here is: [object Window]"

// The function foo's execution context is the global object (window in the
// browser)

var object = {
  foo: function() {
    return 'this here is: ' + this;
  }
};

object.foo();              // "this here is: [object Object]"

var bar = object.foo;
bar();                     // "this here is: [object Window]"

// Above, JS implicity binds the method to the global object instead of object

var a = 1;

var object = {
  a: 'hello',
  b: 'world',
};

function foo() {
  return this.a;
}

foo();              // 1 (context is the global object)
foo.call(object);   // 'hello' (context is object)
// the execution context of foo is explicitly bound to object. On line 31, this
// references object instead of the global object.

var strings = {
  a: 'hello',
  b: 'world',
  foo: function() {
    return this.a + this.b;
  },
};

var numbers = {
  a: 1,
  b: 2,
};

strings.foo.call(numbers); // 3
// we're running foo from strings in the numbers context
// we're 'borrowing' a method from an object to use with another object (we're
// not copying it)

var iPad = {
  name: 'iPad',
  price: 40000,
};

var kindle = {
  name: 'kindle',
  price: 30000,
};

function printLine(lineNumber, punctuation) {
  console.log(`${lineNumber}: ${this.name}, ${this.price / 100} dollars${punctuation}`);
}

printLine.call(iPad, 1, ';');    // 1: iPad, 400 dollars;
printLine.call(kindle, 2, '.');  // 2: kindle, 300 dollars.

// apply method is identical to call, except it uses an array to pass arguments

printLine.apply(iPad, [1, ';']);
printLine.apply(kindle, [2, '.']);
