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

// var temperatues = [53, 86, 12, 43];

// function average() {
//   var total = 0;

//   for (let i = this.length - 1; i >= 0; i -= 1) {
//     total += this[i];
//   };

//   return total / this.length;
// }

// when a method is removed from it's containing object it loses it's context
// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// function foo() {
//   var john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings: function() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     },
//   };

//   repeatThreeTimes(john.greetings);
// }

// update recieving function to take a context
// function repeatThreeTimes(func, context) {
//   func.call(context);
//   func.call(context);
//   func.call(context);
// }

// function foo() {
//   var john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings: function() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     },
//   };

//   repeatThreeTimes(john.greetings, john);
// }

// hard bind the function's context
// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// function foo() {
//   var john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings: function() {
//       console.log(`Hello, ${this.firstName} ${this.lastName}`);
//     }
//   };

//   repeatThreeTimes(john.greetings.bind(john));
// }

// Internal function losing method context
var obj = {
  a: 'hello',
  b: 'world',
  foo() {
    function bar() {
      console.log(`${this.a} ${this.b}`);
    }

    bar();
  },
};
// bar() does not provide an explicit context so the execution context is the
// global object

// // perserve scope using a local variable in the lexical scope
// var obj1 = {
//   a: 'hello',
//   b: 'world',
//   foo() {
//     let that = this;
//     function bar() {
//       console.log(`${that.a} ${that.b}`);
//     }

//     bar();
//   },
// };

// // pass the context to internal functions
// var obj2 = {
//   a: 'hello',
//   b: 'world',
//   foo() {
//     function bar() {
//       console.log(`${this.a} ${this.b}`);
//     }

//     bar.call(this);
//   },
// };

// // bind the context with a function expression
// var obj3 = {
//   a: 'hello',
//   b: 'world',
//   foo() {
//     var bar = function() {
//       console.log(`${this.a} ${this.b}`);
//     }.bind(this)

//     bar();
//   },
// };

// Function as argument losing surrounding context
// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// var john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings: function() {
//     repeatThreeTimes(function() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     });
//   },
// };

// john.greetings();

// // use a local variable in the lexical scope to store this
// var obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     let that = this;
//     [1, 2, 3].forEach(function(number) {
//       console.log(`${number} ${that.a} ${that.b}`);
//     });
//   }
// };

// obj.foo();

// // bind the argument function with the surrounding context
// var obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     [1, 2, 3].forEach(function(number) {
//       console.log(`${number} ${this.a} ${this.b}`);
//     }.bind(this));
//   }
// };

// obj.foo();

// // use optional thisArg argument
// var obj = {
//   a: 'hello',
//   b: 'world',
//   foo: function() {
//     [1, 2, 3].forEach(function(number) {
//       console.log(`${number} ${this.a} ${this.b}`);
//     }, this);
//   }
// };

// obj.foo();

// var turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription: function() {
//     return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
//   }
// };

// function logReturnVal(func, context) {
//   var returnVal = func.apply(context);
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk);
// var getTurkDescription = turk.getDescription.bind(turk);

// var TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     var self = this;
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ' ' + title);
//     });
//   }
// };

// var TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ' ' + title);
//     }.bind(this));
//   }
// };

// var TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ' ' + title);
//     }, this);
//   }
// };

// TESgames.listGames();

// var foo = {
//   a: 0,
//   incrementA: function() {
//     var increment = function() {
//       this.a += 1;
//     }.bind(this);

//     increment();
//     increment();
//     increment();
//   }
// };

// foo.incrementA();

// var myObject = {
//   count: 1,
//   myChildObject: {
//     myMethod: function() {
//       return this.count;
//     },
//   },
// };

// console.log(myObject.myChildObject.myMethod.call(myObject));

// var computer = {
//   price: 30000,
//   shipping: 2000,
//   total: function() {
//     var tax = 3000;
//     function specialDiscount() {
//       if (this.price > 20000) {
//         return 1000;
//       } else {
//         return 0;
//       }
//     }

//     return this.price + this.shipping + tax - specialDiscount.call(this);
//   }
// };

// console.log(computer.total());

// function timed(func) {
//   return function() {
//     var start = new Date();
//     func();
//     var stop = new Date();
//     console.log(`${(stop - start).toString()} ms have elapsed.`);
//   };
// }

// function loopy() {
//   let sum = 0;

//   for (let i = 1; i < 1000000000; i += 1) {
//     sum += i;
//   };

//   console.log(sum);
// }

// var numbers = [1, 2, 3, 4];

// function makeCheckEven() {
//   return function(num) {
//     return num % 2 === 0;
//   }
// }

// var checkEven = makeCheckEven();
// console.log(numbers.filter(checkEven));

// function execute(func, operand) {
//   return func(operand);
// }

// execute(function(number) {
//   return number * 2;
// }, 10);

// execute(function(string) {
//   return string.toUpperCase();
// }, 'hey there buddy');

// function makeListTransformer(func) {
//   return function(list) {
//     return list.map(func);
//   };
// }

// var timesTwo = makeListTransformer(function(number) {
//   return number * 2;
// });

// timesTwo([1, 2, 3, 4]);

// function makeCounter() {
//   var count = 0;
//   return function() {
//     count += 1;
//     console.log(count);
//   };
// }

// function makeCounterLogger(start) {
//   return function(stop) {
//     if (start < stop) {
//       for (let i = start; i <= stop; i += 1) {
//         console.log(i);
//       };
//     } else {
//       for (let i = start; i >= stop; i -= 1) {
//         console.log(i);
//       };
//     }
//   };
// }

// var countlog = makeCounterLogger(5);

// function makeList() {
//   const list = [];

//   return function(item) {
//     if (item && !list.includes(item)) {
//       list.push(item);
//       console.log(`${item} added!`);
//     } else if (item && list.includes(item)) {
//       list.splice(list.indexOf(item), 1);
//       console.log(`${item} was removed!`);
//     } else {
//       if (list.length === 0) {
//         console.log('The list is empty.');
//       } else {
//         list.forEach(item => console.log(item));
//       }
//     }
//   };
// }

// const list = makeList();

// function makeMultipleLister(num) {
//   return function() {
//     for (let i = num; i < 100; i += num) {
//       console.log(i);
//     };
//   };
// }

// var lister = makeMultipleLister(13);

// let total = 0;

// function add(num) {
//   return total += num;
// }

// function subtract(num) {
//   return total -= num;
// }

// function later(func, arg) {
//   return function() {
//     func(arg);
//   };
// }

// var logWarning = later(console.log, 'The system is shutting down!');

// function startup() {
//   var status = 'ready';
//   return function() {
//     console.log('The system is ready.');
//   };
// }

// var ready = startup();

// function makeList() {
//   var items = [];

//   return {
//     add(item) {
//       if (item) {
//         if (items.includes(item)) {
//           console.log(`${item} is already on the list!`);
//         } else {
//           items.push(item);
//           console.log(`${item} added!`);
//         }
//       } else {
//         console.log('Please specify an item to add.');
//       }
//     },
//     remove(item) {
//       if (item) {
//         if (items.includes(item)) {
//           items.splice(items.indexOf(item), 1);
//           console.log(`${item} removed!`);
//         } else {
//           console.log(`${item} is not on the list!`);
//         }
//       } else {
//         console.log('Please specify an item to remove.');
//       }

//     },
//     list() {
//       if (items.length === 0) {
//         console.log('The list is empty.');
//       } else {
//         items.forEach(item => console.log(item))
//       }
//     },
//   };
// }

// const list = makeList();

// function makeAccount(number) {
//   let balance = 0;
//   const transactions = [];

//   return {
//     balance() {
//       return balance;
//     },
//     transactions() {
//       return transactions;
//     },
//     number() {
//       return number;
//     },
//     deposit(amount) {
//       this.balance += amount;
//       this.addTransaction('deposit', amount);
//       return amount;
//     },
//     withdraw(amount) {
//       if (amount > this.balance) {
//         amount = this.balance;
//       }

//       this.balance -= amount;
//       this.addTransaction('withdraw', amount);
//       return amount;
//     },
//     addTransaction(type, amount) {
//       transactions.push({type: type, amount: amount});
//     }
//   }
// };

// function makeBank() {
//   let nextNumber = 101;
//   const accounts = [];

//   return {
//     getNextNumber() {
//       const number = nextNumber;
//       nextNumber += 1;
//       return number;
//     },
//     openAccount() {
//       const newAccount = makeAccount(this.getNextNumber());
//       accounts.push(newAccount);
//       return newAccount;
//     },
//     transfer(source, destination, amount) {
//       return destination.deposit(source.withdraw(amount));
//     }
//   };
// }

// var bank = makeBank();
// var account = bank.openAccount();

// function primaryFunc(arg1, arg2) {
//   console.log(arg1);
//   console.log(arg2);
// }

// function generatorFunc(primary, arg1) {
//   return function(arg2) {
//     return primary(arg1, arg2);
//   };
// }

// var applicatorFunc = generatorFunc(primaryFunc, 100);

// function add(a, b) {
//   return a + b;
// }

// function makeAddN(addend) {
//   return function(number) {
//     return add(addend, number);
//   };
// }

// var add1 = makeAddN(1);
// var add9 = makeAddN(9);

// function partial(primary, arg1) {
//   return function(arg2) {
//     return primary(arg1, arg2);
//   };
// }

// var add10 = partial(add, 10);

// var add20 = add.bind(null, 20);

// function partial(func, arg1) {
//   return function(arg2) {
//     return func(arg1, arg2);
//   };
// }

// function greet(greeting, name) {
//   console.log(`${greeting}, ${name}!`);
// }

// let sayHello = partial(greet, 'Hello');
// let sayHi = partial(greet, 'Hi');

// function subtract(a, b) {
//   return a - b;
// }

// function sub5(num) {
//   return subtract(num, 5);
// }

// function makeSubN(n) {
//   return function(num) {
//     return subtract(num, n);
//   };
// }

// function partial(func, arg1) {
//   return function(arg2) {
//     return func(arg1, arg2);
//   };
// }

// function multiply(a, b) {
//   return a * b;
// }

// var multiplyBy5 = partial(multiply, 5);

// var subjects = {
//   English: ['Bob', 'Tyrone', 'Lizzy'],
//   Math: ['Fatima', 'Gary', 'Susan'],
//   Biology: ['Jack', 'Sarah', 'Tanya'],
// };

// function rollCall(subject, students) {
//   console.log(subject + ':');
//   students.forEach(function(student) {
//     console.log(student);
//   });
// }

// function makeMathRollCall() {
//   return function(students) {
//     return rollCall('Math', students);
//   };
// }

// var mathRollCall = makeMathRollCall();
// mathRollCall(subjects['Math']);

// (function() {
//   console.log('hello');
// })();

// (function(a) {
//   console.log(a + 10);
// })(2);

// var foo = function() {
//   return function() {
//     return 10;
//   }();
// }();

// (function(num) {
//   for (let i = 0; i < num; i += 1) {
//     console.log(i);
//   };
// })(20);

// let nextStudentId = (function() {
//   let id = 1;

//   return function() {
//     return id += 1;
//   };
// })();

// var inventory = {
//   stocks: [],
//   stockCounts: function() {
//     this.stocks.forEach(function(stock) {
//       console.log(stock.name + ': ' + String(stock.count));
//     });
//   }
// };

// var inventory = (function() {
//   var stocks = [];
//   var isValid = stocks.every(function(stock) {
//     return newStock.name !== stock.name;
//   });

//   return {
//     stockCounts: function() {
//       stocks.forEach(function(stock) {
//         console.log(stock.name + ': ' + String(stock.count));
//       });
//     },
//     addStock: function(newStock) {
//       if (isValid) { stocks.push(newStock) }
//     }
//   };
// })();

// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// sum += (function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);

// function countdown(start) {
//   (function logIt(num) {
//     if (num >= 0) {
//       console.log(num);
//       logIt(num - 1);
//     } else {
//       console.log('Done!');
//     };
//   })(start);
// }
