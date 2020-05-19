// Constructor pattern
// function Robot(name, job) {
//   this.name = name;
//   this.job = job;

//   this.introduce = function() {
//     console.log(`Hi I'm ${this.name}. My job is ${this.job}.`);
//   };
// }

// Pseudo-classical pattern
// function Robot(name, job) {
//   this.name = name;
//   this.job = job;
// }

// Robot.prototype.introduce= function() {
//   console.log(`Hi I'm ${this.name}. My job is ${this.job}.`);
// };

// var bender = new Robot('Bender', 'bending');
// bender.introduce();
// console.log(bender instanceof Robot);

// var wallE = new Robot('Wall-E', 'trash collection');
// wallE.introduce();
// console.log(wallE instanceof Robot);

// OLOO pattern
// var Robot = {
//   init(name, job) {
//     this.name = name;
//     this.job = job;
//   },
//   introduce() {
//     console.log(`Hi I'm ${this.name}. My job is ${this.job}.`);
//   },
// };

// var bender = Object.create(Robot);
// bender.init('Bender', 'bending');
// bender.introduce();
// console.log(Object.getPrototypeOf(bender) === Robot);

// var wallE = Object.create(Robot);
// wallE.init('Wall-E', 'trash collection');
// wallE.introduce();
// console.log(Object.getPrototypeOf(wallE) === Robot);

// Pseudo-Classical Example:
// // define a constructor function
// function Animal(name) {
//   this.name = name;
// }

// // another constructor function using `call` to call the Animal constructor with
// // `this` and `name` arguments
// function Dog(name) {
//   Animal.call(this, name);
// }

// // Dog prototype is set to be a copy of `Animal` prototype
// Dog.prototype = Object.create(Animal.prototype);

// // fix the constructor, so that objects created from `Dog` will correctly
// // reference Dog as the constructor
// Dog.prototype.constructor = Dog;

// // add a bark method to the Dog prototype
// Dog.prototype.barks = function() {
//   console.log(`${this.name} barks!`);
// };

// const sparky = new Dog('Sparky');

// Example using 2015 class syntax:
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }

//   barks() {
//     console.log(`${this.name} barks!`);
//   }
// }

// const sparky = new Dog('Sparky');

// OLOO Example
// create a template object (not a function)
// init method sets initial state
// const Animal = {
//   init(name) {
//     this.name = name;
//     return this;
//   }
// };

// // create a Dog object from Animal which establishes a link in the prototype
// // chain
// const Dog = Object.create(Animal);

// // add a method to the Dog object
// Dog.barks = function() {
//   console.log(`${this.name} barks!`);
// };

// const sparky = Object.create(Dog).init('Sparky');

// var animal = {
//   type: 'mammal',
//   breathe: function() {
//     console.log("I'm breathing");
//   }
// };

// var dog = Object.create(animal);

// var terrier = Object.create(dog);

// dog.speak = function() {
//   console.log('WOOF WOOF!');
// };

// OLOO
// var Animal = {
//   init(type) {
//     this.type = type;
//   },

//   breathe() {
//     console.log(`I'm breathing`);
//   }
// };

// var Dog = Object.create(Animal);
// var Terrier = Object.create(Dog);

// var mammal = Object.create(Animal);
// mammal.init('mammal');
// var reptile = Object.create(Animal);
// reptile.init('reptile');

// Factory Pattern
// function createAnimal() {
//   return {
//     type: 'mammal',
//     breathe() {
//       console.log(`I'm breathing`);
//     },
//   };
// }

// var animal = createAnimal();

// Constructor pattern
// function Animal() {
//   this.type = 'mammal';
// }

// Animal.prototype.breathe = function() {
//   console.log(`I'm breathing`);
// };

// Animal.prototype.type = 'mammal';

// function Dog() { this.legs = 4 }
// function Terrier() {}

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Terrier.prototype = Object.create(Dog.prototype);
// Terrier.prototype.constructor = Terrier;

// var a = new Animal();
// var b = new Dog();
// var c = new Terrier();
// var d = new c.constructor()

// OOP video from Ryan Schaul
// Example 1
// const obj = {
//   monkey: 'yep',
// };

// console.log(typeof obj === 'object');
// console.log(typeof obj === 'function');

// console.log(obj.hasOwnProperty('monkey'));
// console.log(obj.hasOwnProperty('elephant'));

// console.log(obj.__proto__ === Object.prototype);
// console.log(Object.getPrototypeOf(obj) === Object.prototype);

// function test() {
//   console.log('hi');
// }

// An object's prototype is said to be the next link up the chain, teh object
// that the current object inherits from. In other words, what the current
// object's __proto__ property references.
//
// BUT, `prototype` is ALSO the name ofr a specific property on the object form
// of Functions.
//
// - __proto__ is a hidden property that is defined on all objects.
// - prototype is a hidden property on all function object combinations that
// referes to another object

// Example 2
// const func = function() {};
// func.call();

// console.log(func.__proto__ === Function.prototype);
// console.log(func.constructor === Function);

// Example 3
// const arr = ['a', 'b'];
// console.log(arr.join(''));

// Example 4
// const arr = ['a', 'b'];
// console.log(arr.hasOwnProperty(0));

// console.log(typeof Function.prototype);
// console.log(Function.prototype.constructor === Function);

// Example 5
// const userFunctions = {
//   add: function() { this.points += 1 },
//   login: function() { console.log(`You're logged in`) },
// };

// function userCreator(name, points) {
//   const newUser = Object.create(userFunctions);
//   newUser.name = name;
//   newUser.points = points;
//   return newUser;
// }

// const user = userCreator('Andrew', 42);

// console.log(user.constructor === Object);
// console.log(user.__proto__ === userFunctions);

// console.log(userFunctions.constructor === Object);
// console.log(userFunctions.__proto__ === Object.prototype);

// Confusion with prototype here:
// 1. prototype property on either object here?
// 2. still refer to userFunctions as the prototype of user

// Example 6
// function UserCreator(name, points) {
//   this.name = name;
//   this.points = points;
// }

// UserCreator.prototype.add = function() {
//   this.points += 1;
// };

// const user = new UserCreator('Andrew', 42);

// // 1. constructor function. Intended to be called with the `new` keyword. If you
// //    don't use `new` you will clobber the global object.
// // 2. `new` provides a new execution context
// // 3. Does 4 main things for us automatically:
// //    1. creates an empty object. (we used Object.create before)
// //    2. assigns the `this` keyword to refer to that empty object. (before, we
// //       had to refer to the obejct itself to push properties/values on it)
// //    3. sets the __proto__ property of the empty object to the function's
// //       prototype property. Thisis the handy dandy conventnet place that JS gives
// //       us to store functions we want to share.
// //    4. implicitly returns the newly created object.

// console.log(Object.getPrototypeOf(user) === UserCreator.prototype);
// console.log(user.constructor === UserCreator);

// Example 7
// function UserCreator(name) {
//   this.name = name;
// }

// UserCreator.prototype.sayName = function () {
//   console.log(`I'm ${this.name}!`);
// };

// function PaidUserCreator(paidName, balance) {
//   UserCreator.call(this, paidName);
//   this.balance = balance;
// }

// console.log(Object.getPrototypeOf(PaidUserCreator.prototype) === Object.prototype);
// console.log(Object.getPrototypeOf(PaidUserCreator.prototype) !== UserCreator.prototype);

// PaidUserCreator.prototype = Object.create(UserCreator.prototype);
// PaidUserCreator.prototype.constructor = PaidUserCreator;
// // the wrong way to create the connection above would be to assign the same
// // object as the UserCreator.prototype

// console.log(Object.getPrototypeOf(PaidUserCreator.prototype) === UserCreator.prototype);

// PaidUserCreator.prototype.increase = function() {
//   this.balance += 1;
//   console.log(this.balance);
// };

// const user1 = new UserCreator('Bean');
// const paidUser1 = new PaidUserCreator('Andrew', 42);

// Example 8
// class UserCreator {
//   constructor(name) {
//     this.name = name;
//   }

//   sayName() {
//     console.log(`I'm ${this.name}!`);
//   }
// }


// class PaidUserCreator extends UserCreator {
//   constructor(name, balance) {
//     super(name);
//     this.balance = balance;
//   }

//   increase() {
//     this.balance += 1;
//     console.log(`Balance: ${this.balance}`);
//   }
// }

// const user1 = new UserCreator('Bean');
// const paidUser1 = new PaidUserCreator('Andrew', 42);

// Understanding links on the object prototype chain
// var House = {
//   ringDoorbell() {
//     console.log('Ding Dong!');
//   },
//   describe() {
//     console.log(`${this.owner}'s house has ${this.rooms} rooms.`);
//   }
// };

// var Castle = Object.create(House);
// Castle.describe = function() {
//   console.log(`${this.owner} owns a mighty castle with ${this.rooms} rooms!`);
// };

// var bobsHouse = Object.create(House);
// bobsHouse.owner = 'Bobbus';
// bobsHouse.rooms = 4;

// var hearstCastle = Object.create(Castle);
// hearstCastle.owner = 'William Randolph Hearst';
// hearstCastle.rooms = 56;

// function crawlPrototypeChain(obj) {
//   console.log('--------------------------');
//   console.log('Object: ', obj);
//   console.log('Own Properties: ', Object.getOwnPropertyNames(obj));

//   var objPrototype = Object.getPrototypeOf(obj);
//   if (objPrototype) {
//     crawlPrototypeChain(objPrototype);
//   }
// }

// let f = function () {
//   this.a = 1;
//   this.b = 2;
// };

// let o = new f();

// f.prototype.b = 3;
// f.prototype.c = 4;

// var o = {
//   a: 2,
//   m: function() {
//     return this.a + 1;
//   }
// };

// var p = Object.create(o);
// p.a = 4;

// Objects created with syntax constructs
// var o = { a: 1 };
// var b = ['yo', 'whadup', '?'];
// function f() {
//   return 2;
// }

// Objects created with a constructor
// function Graph() {
//   this.vertices = [];
//   this.edges = [];
// }

// Graph.prototype = {
//   addVertex: function(v) {
//     this.vertices.push(v);
//   }
// };

// var g = new Graph();

// // Objects created with Object.create
// var a = {a: 1};
// var b = Object.create(a);
// var c = Object.create(b);
// var d = Object.create(null);

// // `delete` Operator with `Object.create` and `new` operator
// var a = {a: 1}
// var b = Object.create(a);

// function Graph() {
//   this.vertices = [4,4];
// }

// var g = new Graph();

// let i = {
//   _asdf: 'asdf',
//   fdsa: 'fdsa',
// };

// var jane = {
//   name: 'Jane',
//   sayHelloTo: function(otherName) {
//     'use strict';
//     console.log(`${this.name} says hello to ${otherName}`);
//   }
// };

// function func(...args) {
//   console.log('this: ' + this);
//   console.log('arguments: ' + args);
// }

// function myBind(context, func, ...args1) {
//   return function(...args2) {
//     func.call(context, ...args1, ...args2);
//   };
// }

// var obj = {
//   name: 'Jane',
//   friends: ['Tarzan', 'Cheeta'],
//   loop: function() {
//     'use strict';
//     this.friends.forEach(function(friend) {
//       console.log(this.name + ' knows ' + friend);
//     }, this);
//   }
// };
