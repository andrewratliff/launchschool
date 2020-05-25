// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName || '';
//   this.fullName = function () {
//     return (this.firstName + ' ' + this.lastName).trim();
//   };
// }

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName || '';
  };

  // fullName() {
  //   return (this.firstName + ' ' + this.lastName).trim();
  // }

  get fullName() {
    return (this.firstName + ' ' + this.lastName).trim();
  }
}

const john = new Person('John', 'Doe');
const jane = new Person('Jane');
