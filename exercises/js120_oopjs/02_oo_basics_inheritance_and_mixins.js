// class Vehical {
//   constructor(year) {
//     this.year = year;
//   }

//   startEngine() {
//     return `Ready to go!`;
//   }
// }

// class Truck extends Vehical {
//   constructor(year, bedType) {
//     super(year);
//     this.bedType = bedType;
//   }

//   startEngine(speed) {
//     return super.startEngine() + ` Drive ${speed}, please!`;
//   }
// }

// class Car extends Vehical {
//   constructor(year) {
//     super(year);
//   }
// }

// const walkMixin = {
//   walk() {
//     return `Let's go for a walk!`;
//   },
// };

// class Cat {
//   constructor(name) {
//     this.name = name;
//     Object.assign(this, walkMixin);
//   }

//   greet() {
//     return `Hello! My name is ${this.name}!`;
//   }
// }

// const swimMixin = {
//   swim() {
//     return `${this.name} is swimming.`;
//   }
// }

// class Fish {
//   constructor(name) {
//     this.name = name;
//     Object.assign(this, swimMixin);
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//     Object.assign(this, swimMixin);
//   }
// }

// class Maltese extends Dog {}

const towMixin = {
  tow() {
    return 'I can tow a trailer!';
  }
};

class Vehical {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehical {
  constructor(year) {
    super(year);
    Object.assign(this, towMixin);
  }
}

class Car extends Vehical {}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);
