var Foo = function() {};
var obj = Foo.prototype;

var bar = new Foo();
var baz = new Foo();

Object.getPrototypeOf(bar) === obj; // true
Object.getPrototypeOf(baz) === obj; // true

bar.constructor === Foo;
baz.constructor === Foo;
bar instanceof Foo;
baz instanceof Foo;

// when Foo is called with new, as a constructor
function Foo(a, b) {
  // this = new Object();                 // a new object, or just {}
  // this.__proto__ = Foo.prototype       // have the object inherit from Foo.prototype

  this.a = b;
  this.b = b;

  // return this;                         // return the created object
}

// another way to write it, with Object.create()
function Foo(a, b) {
  // this = Object.create(Foo.prototype);

  this.a = a;
  this.b = b;

  // return this;                         // return the created object
}

class Dog {}

Dog.prototype.say = function() {
  console.log(this.name + ' says Woof!');
};

Dog.prototype.run = function() {
  console.log(this.name + ' runs away.');
};

var fido = new Dog();
fido.name = 'Fido';

var spot = new Dog();
spot.name = 'Spot';
