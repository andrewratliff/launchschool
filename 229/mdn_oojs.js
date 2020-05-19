function createNewPerson(name) {
  const obj = {}
  obj.name = name;
  obj.greeting = function() {
    alert(`Hi! I'm ${obj.name}.`);
  };

  return obj;
}

function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}

Person.prototype.bio = function() {
    console.log(`${this.name.first} ${this.name.last} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`);
};

Person.prototype.greeting = function() {
  console.log(`Hi! I'm ${this.name}.`);
};

Person.prototype.farewell = function() {
  console.log(`${this.name.first} has left the building. Bye for now!`);
};

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

Object.defineProperty(Teacher.prototype, 'constructor', {
  value: Teacher,
  enumerable: false,
  writable: true,
});

Teacher.prototype.greeting = function() {
  let prefix;

  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    prefix = 'Mr.';
  } else if (this.gender === 'Female' || this.gender === 'female' || this.gender === 'f' || this.gender === 'F') {
    prefix = 'Ms.';
  } else {
    prefix = 'Mx.';
  }

  console.log(`Hello. My name is ${prefix} ${this.name.last}, and I teach ${this.subject}.`);
};

function Student(first, last, age, gender, interests) {
  Person.call(this, first, last, age, gender, interests);
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.greeting = function() {
  console.log(`Yo! I'm ${this.name.first}.`);
};

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
let student1 = new Student('Angela', 'Smith', 11, 'female', ['sewing', 'cookery']);

// function Shape(name, sides, sideLength) {
//   this.name = name;
//   this.sides = sides;
//   this.sideLength = sideLength;
// }

// Shape.prototype.calcPerimeter = function() {
//   return this.sides * this.sideLength;
// };

class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    return this.sides * this.sideLength;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super('square', 4, sideLength);
  }

  calcArea() {
    return this.sideLength ** 2;
  }
}

let square = new Shape('square', 4, 5);
console.log(square.calcPerimeter());

let triangle = new Shape('triangle', 3, 3);
console.log(triangle.calcPerimeter());

let square2 = new Square(5);
console.log(square2.calcPerimeter());
console.log(square2.calcArea());
