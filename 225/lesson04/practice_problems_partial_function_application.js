// 1
function subtract(a, b) {
  return a - b;
}

function sub5(a) {
  return subtract(a, 5);
}

// console.log(sub5(10));
// console.log(sub5(20));

// 2
function makeSubN(n) {
  return function(a) {
    return a - n;
  };
}

// var sub5 = makeSubN(5);
// console.log(sub5(10));

// 3
function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b);
  };
}

function multiply(a, b) {
  return a * b;
}

var multiplyBy5 = makePartialFunc(multiply, 5);

console.log(multiplyBy5(100));

// 4
// func and b are still accessible by multiplyBy5 thanks to closures. When a new
// function is created, it retains access to all of the references visible to it
// in the lexical location of its creation.

// 5
var subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  let subject = 'Math';

  return function(students) {
    return rollCall(subject, students);
  };
}

var mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan
