// 01
// var shape = {
//   getType() {
//     return this.type;
//   },
// }

// function Triangle(a, b, c) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.type = 'triangle';
// }

// Triangle.prototype = shape;
// Triangle.prototype.getPerimeter = function() {
//   return this.a + this.b + this.c;
// };

// Triangle.prototype.constructor = Triangle;

// var t = new Triangle(3, 4, 5);
// console.log(t.constructor);
// console.log(shape.isPrototypeOf(t));
// console.log(t.getPerimeter());
// console.log(t.getType());

// 02
// function User(first, last) {
//   this.name = `${first} ${last}`;
//   return this;
// }

// LS solution:
// function User(first, last) {
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   }

//   this.name = first + ' ' + last;
// }

// var name = 'Jane Doe';
// var user1 = new User('John', 'Doe');
// var user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe

// 03
// function createObject(obj) {
//   function Func() {};
//   Func.prototype = obj;
//   return new Func();
// }

// var foo = {
//   a: 1
// };

// var bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));         // true

// 04
// var foo = {
//   a: 1,
// };

// Object.prototype.begetObject = function () {
//   function Func() {}
//   Func.prototype = this;
//   return new Func();
// };


// var bar = foo.begetObject();
// console.log(foo.isPrototypeOf(bar));         // true

// 05
function neww(constructor, args) {
  var object = Object.create(constructor.prototype);
  var result = constructor.apply(object, args);

  return typeof result === 'object' ? result : object;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

var john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
john.constructor;         // Person(firstName, lastName) {...}
