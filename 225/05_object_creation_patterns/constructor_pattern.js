// constructor function
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName || '';
  this.fullName = function () {
    return (this.firstName + ' ' + this.lastName).trim();
  };
}

var john = new Person('John', 'Doe');
var jane = new Person('Jane');

console.log(john.fullName());
console.log(jane.fullName());

console.log(john.constructor);
console.log(jane.constructor);

console.log(john instanceof Person);
console.log(jane instanceof Person);
