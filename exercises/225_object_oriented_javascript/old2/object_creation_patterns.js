// 1 Ancestors
// Object.prototype.ancestors = function() {
//   const result = [];
//   let parent = Object.getPrototypeOf(this);

//   while (parent !== Object.prototype) {
//     result.push(parent.name);
//     parent = Object.getPrototypeOf(parent);
//   }

//   result.push('Object.prototype');

//   return result;
// }

// var foo = {name: 'foo'};
// var bar = Object.create(foo);
// bar.name = 'bar';
// var baz = Object.create(bar);
// baz.name = 'baz';
// var qux = Object.create(baz);
// qux.name = 'qux';

// 2 Delegate
// function delegate(obj, methodName, ...args) {
//   return function() {
//     return obj[methodName].apply(obj, args);
//   };
// }

// var foo = {
//   name: 'test',
//   bar: function(greeting) {
//     console.log(greeting + ' ' + this.name);
//   },
// };

// var baz = {
//   qux: delegate(foo, 'bar', 'hello'),
// };

// baz.qux();   // logs 'hello test';

// foo.bar = function() { console.log('changed'); };

// baz.qux();          // logs 'changed'

// 3 Classical Object Creation
// function Person(firstName, lastName, age, gender) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
// }

// Person.prototype.fullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// Person.prototype.communicate = function() {
//   console.log('Communicating');
// };

// Person.prototype.eat = function() {
//   console.log('Eating');
// };

// Person.prototype.sleep = function() {
//   console.log('Sleeping');
// };

// function Doctor(firstName, lastName, age, gender, specialization) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.specialization = specialization;
// }

// Doctor.prototype = Object.create(Person.prototype);
// Doctor.prototype.diagnose = function() {
//   console.log('Diagnosing');
// };
// Doctor.prototype.constructor = Doctor;

// function Professor(firstName, lastName, age, gender, subject) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.subject = subject;
// }

// Professor.prototype = Object.create(Person.prototype);
// Professor.prototype.teach = function() {
//   console.log('Teaching');
// };
// Professor.prototype.constructor = Professor;

// function Student(firstName, lastName, age, gender, degree) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.degree = degree;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.study = function() {
//   console.log('Studying');
// };
// Student.prototype.constructor = Student;

// function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
//   Student.call(this, firstName, lastName, age, gender, degree);
//   this.graduateDegree = graduateDegree;
// }

// GraduateStudent.prototype = Object.create(Student.prototype);
// GraduateStudent.prototype.research = function() {
//   console.log('Researching');
// };
// GraduateStudent.prototype.constructor = GraduateStudent;

class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  communicate() {
    console.log('Communicating');
  }

  eat() {
    console.log('Eating');
  }

  sleep() {
    console.log('Sleeping');
  }
}

class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = specialization;
  }

  diagnose() {
    console.log('Diagnosing');
  }
}

class Professor extends Person {
  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender);
    this.subject = subject;
  }

  teach() {
    console.log('Teaching');
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender);
    this.degree = degree;
  }

  study() {
    console.log('Studying');
  }
}

class GraduateStudent extends Student {
  constructor(firstName, lastName, age, gender, degree, graduateDegree) {
    super(firstName, lastName, age, gender, degree);
    this.graduateDegree = graduateDegree;
  }

  research() {
    console.log('Researching');
  }
}

// var person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

// var doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'

// var graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// // logs true for next three statements
// console.log(graduateStudent instanceof Person);
// console.log(graduateStudent instanceof Student);
// console.log(graduateStudent instanceof GraduateStudent);
// graduateStudent.eat();                     // logs 'Eating'
// graduateStudent.communicate();             // logs 'Communicating'
// graduateStudent.sleep();                   // logs 'Sleeping'
// console.log(graduateStudent.fullName());   // logs 'foo bar'
// graduateStudent.study();                   // logs 'Studying'
// graduateStudent.research();                // logs 'Researching'

// 4 Classical Object Creation with Mixin

var professional = {
  invoice() {
    console.log(`${this.fullName} is Asking customer to pay`);
  },

  payTax() {
    console.log(`${this.fullName} is Paying taxes`);
  },
};

function delegate(callingObject, methodOwner, methodName) {
  return function() {
    return methodOwner[methodName].apply(callingObject, arguments);
  };
}

function extend(object, mixin) {
  const methods = Object.keys(mixin);

  methods.forEach(methodName => {
    object[methodName] = delegate(object, mixin, methodName);
  });

  return object;
}

var doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), professional);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'S
doctor.diagnose();                         // logs 'Diagnosing'

var professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), professional);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

professional.invoice = function() {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'
