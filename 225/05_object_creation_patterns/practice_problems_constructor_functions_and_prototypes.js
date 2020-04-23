// 01
// (function () {
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

// foo = new Foo();

// foo.bar();
// Foo();

// obj = {};
// Foo.call(obj);
// obj.bar();

// console.log(this.a);
// })();

// 02
// var RECTANGLE = {
//   area: function() {
//     return this.width * this.height;
//   },
//   perimeter: function() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// var rect1 = new Rectangle(2, 3);
// console.log(rect1.area);
// console.log(rect1.perimeter);

// 03
// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.area = function() {
//   return Math.PI * Math.pow(this.radius, 2);
// };


// var a = new Circle(3);
// var b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27

// 04
// var ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// console.log(ninja.swingSword());
// The prototype chain lookup happens when the `swingSword` method is called on
// the object, not when the ninja object is created.

// 05
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

// console.log(ninja.swingSword());
// Ninja.prototype is being reassigned to a new object, but ninja still points
// at the original object returned by Ninja(). Since swingSword is not defined
// on the original constructor, we get ninja.swingSword is not a function.

// 06
// var ninjaA;
// var ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// Ninja.prototype.swing = function() {
//   this.swung = !this.swung;

//   return this;
// };
// // Add a swing method to the Ninja prototype which
// // returns the calling object and modifies swung

// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true

// 07
// var ninjaA = (function() {
//   function Ninja(){};
//   return new Ninja();
// })();

// var ninjaB = Object.create(ninjaA);
// var ninjaC = Object.create(Object.getPrototypeOf(ninjaA));

// console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
// console.log(ninjaB.constructor === ninjaC.constructor);    // should log true
// console.log(new ninjaA.constructor);
// console.log(ninjaA.constructor);
