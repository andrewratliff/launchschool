// 1
// var a = 1;
// var foo;
// var obj;

// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }

// 2
// var RECTANGLE = {
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },
// };

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//     this.area = RECTANGLE.area.call(this);
//     this.perimeter = RECTANGLE.perimeter.call(this);
//   }
// }

// var rect1 = new Rectangle(2, 3);

// 3
// class Circle1 {
//   constructor(radius) {
//     this.radius = radius;
//     this.area = function() {
//       return Math.PI * Math.pow(this.radius, 2);
//     };
//   }
// }

// class Circle2 {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   area() {
//     return Math.PI * Math.pow(this.radius, 2);
//   }
// }

// function Circle3(radius) {
//     this.radius = radius;
//     this.area = function() {
//       return Math.PI * Math.pow(this.radius, 2);
//     };
// }

// function Circle4(radius) {
//   this.radius = radius;
// }

// Circle4.prototype.area = function() {
//   return Math.PI * Math.pow(this.radius, 2);
// };

// var a = new Circle1(3);
// var b = new Circle2(3);
// var c = new Circle3(3);
// var d = new Circle4(3);

// console.log(a.area().toFixed(2));
// console.log(b.area().toFixed(2));
// console.log(c.area().toFixed(2));
// console.log(d.area().toFixed(2));

// 4
// var ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// 5
// var ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   },
// };

// ninja.swingSword() // results in an error

// since Ninja.prototype is reassigned (as opposed to mutated), ninja still
// inherits from the original protoype object

// 6
// var ninjaA;
// var ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// };

// var ninjaA = (function() {
//   function Ninja(){};
//   return new Ninja();
// })();

// // using Object.create
// // var ninjaB = Object.create(Object.getPrototypeOf(ninjaA));

// // using the constructor function
// var ninjaB = new ninjaA.constructor;

// Part 2
// 1

// var shape = {
//   getType() {
//     return this.type;
//   },
// };

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

// 2
// function User(first, last) {
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   }

//   this.first = first;
//   this.last = last;
//   this.name = this.first + ' ' + this.last;
// }

// var name = 'Jane Doe';
// var user1 = new User('John', 'Doe');
// var user2 = User('John', 'Doe');

// 3
// function createObject(obj) {
//   function F() {}
//   F.prototype = obj;
//   return new F();
// }

// var foo = {
//   a: 1,
// };

// var bar = createObject(foo);

// 4
// var foo = {
//   a: 1,
// };

// Object.prototype.begetObject = function() {
//   function F() {};
//   F.prototype = this;
//   return new F();
// };

// var bar = foo.begetObject();
// foo.isPrototypeOf(bar);

// 5
// function neww(constructor, args) {
//   const object = Object.create(constructor.prototype);
//   const result = constructor.apply(object, args);

//   return result === 'object' ? result : object;
// }

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greeting = function() {
//   console.log(`Hello, ${this.firstName} ${this.lastName}`);
// };

// var john = neww(Person, ['John', 'Doe']);
// console.log(john.greeting());
// console.log(john.constructor);

function newPerson(name) {
  const obj = {
    name: name,
  };

  Object.defineProperties(obj, {
    log: {
      value: function() {
        console.log(this.name)
      },
      writable: false,
    },
  });

  return obj;
}

var me = newPerson('Shane Riley');

var frozen = {
  integer: 4,
  string: 'String',
  array: [1, 2, 3],
  object: {
    foo: 'bar',
  },
  func: function() {
    console.log('I\'m frozen');
  },
};
