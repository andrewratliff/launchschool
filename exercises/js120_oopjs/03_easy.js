// Rectangles
// class Rectangle {
//   constructor(width, length) {
//     this.width = width;
//     this.length = length;
//   }

//   getWidth() {
//     return this.width;
//   }

//   getLength() {
//     return this.length;
//   }

//   getArea() {
//     return this.width * this.length;
//   }
// }

// let rect = new Rectangle(4, 5);

// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20

// // Squares
// class Square extends Rectangle {
//   constructor(side) {
//     super(side, side);
//   }
// }

// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25

// Fake Cat
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }

// let fakeCat = Object.create(Cat.prototype);
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Cat extends Pet {
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }

//   info() {
//     return `My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`;
//   }
// }

// let pudding = new Cat('Pudding', 7, 'black and white');
// let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

// console.log(pudding.info());
// console.log(butterscotch.info());

// Animals
// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }

//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 4, 'cat', status);
//   }

//   introduce() {
//     return super.introduce() + ' Meow meow!'
//   }
// }

// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, 'dog', status);
//     this.master = master;
//   }

//   greetMaster() {
//     return `Hello, ${this.master}! Woof, woof!`;
//   }
// }

// Refactoring Vehicles
// class Vehicle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   info() {
//     return `${this.make} ${this.model}`
//   }
// }

// class Car extends Vehicle {
//   getWheels() {
//     return 4;
//   }
// }

// class Motorcycle extends Vehicle {
//   getWheels() {
//     return 2;
//   }
// }

// class Truck extends Vehicle {
//   constructor(make, model, payload) {
//     super(make, model);
//     this.payload = payload;
//   }

//   getWheels() {
//     return 6;
//   }
// }

// Shouter
// class Person {
//   greeting(text) {
//     console.log(text);
//   }
// }

// class Shouter extends Person {
//   greeting(text) {
//     super.greeting(text.toUpperCase());
//   }
// }

// let person = new Person();
// let shouter = new Shouter();

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

// Moving
// const walkMixin = {
//   walk() {
//     return `${this.name} ${this.gait()} forward`;
//   }
// };

// class Person {
//   constructor(name) {
//     this.name = name;
//     Object.assign(this, walkMixin);
//   }

//   gait() {
//     return "strolls";
//   }
// }

// class Cat extends Person {
//   gait() {
//     return "saunters";
//   }
// }

// class Cheetah extends Person {
//   gait() {
//     return "runs";
//   }
// }

// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// // "Flash runs forward"

// class Pet {
//   constructor(species, name) {
//     this.species = species;
//     this.name = name;
//   }
// }

// class Owner {
//   constructor(name) {
//     this.name = name;
//     this.pets = [];
//   }

//   numberOfPets() {
//     return this.pets.length;
//   }
// }

// class Shelter {
//   constructor() {
//     this.owners = [];
//   }

//   adopt(owner, pet) {
//     owner.pets.push(pet);

//     if (!this.owners.includes(owner)) {
//       this.owners.push(owner);
//     }
//   }

//   printAdoptions() {
//     this.owners.forEach(owner => {
//       console.log(`${owner.name} has adopted the following pets:`);

//       owner.pets.forEach(pet => {
//         console.log(`a ${pet.species} name ${pet.name}`);
//       })
//     });
//   }
// }

// let butterscotch = new Pet('cat', 'Butterscotch');
// let pudding      = new Pet('cat', 'Pudding');
// let darwin       = new Pet('bearded dragon', 'Darwin');
// let kennedy      = new Pet('dog', 'Kennedy');
// let sweetie      = new Pet('parakeet', 'Sweetie Pie');
// let molly        = new Pet('dog', 'Molly');
// let chester      = new Pet('fish', 'Chester');

// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');

// let shelter = new Shelter();
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);
// shelter.printAdoptions();
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

// class Banner {
//   constructor(message, width = message.length) {
//     this.message = message;
//     this.width = width;
//   }

//   displayBanner() {
//     console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
//   }

//   horizontalRule() {
//     return `+-${'-'.repeat(this.width)}-+`;
//   }

//   emptyLine() {
//     return `| ${' '.repeat(this.width)} |`;
//   }

//   messageLine() {
//     let paddingSize = (this.width - this.message.length) / 2;

//     if (paddingSize < 0) {
//       paddingSize = 0;
//     }

//     let padding = ' '.repeat(paddingSize);

//     return `| ${padding}${this.message}${padding} |`
//   }
// }

// let banner1 = new Banner('To boldly go where no one has gone before.', 100);
// banner1.displayBanner();

// let banner2 = new Banner('', 10);
// banner2.displayBanner();

// let banner3 = new Banner('To boldly go where no one has gone before.', 10);
// banner3.displayBanner();
