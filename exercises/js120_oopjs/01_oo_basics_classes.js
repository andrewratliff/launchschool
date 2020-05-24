class Cat {
  constructor(name) {
    this.name = name;
  }

  static genericGreeting() {
    console.log(`Hello! I'm a cat!`);
  }

  personalGreeting() {
    console.log(`Hello! My name is ${this.name}!`);
  }

  rename(newName) {
    this.name = newName;
  }
}

let kitty = new Cat('Sophie');

class Person {
  constructor(name = 'John Doe') {
    this.name = name;
  }
}

let person1 = new Person();
let person2 = new Person("Pepe");

Cat.genericGreeting();
kitty.personalGreeting();
