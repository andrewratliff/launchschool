// 1
function subtract(a, b) {
  return a - b;
}

// function sub5(a) {
//   return subtract(a, 5);
// }


// 2
function makeSubN(n) {
  return function(num) {
    return subtract(num, n)
  };
}

// const sub5 = makeSubN(5);

// 3
function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b);
  };
}

function multiply(a, b) {
  return a * b;
}

const multiplyBy5 = makePartialFunc(multiply, 5);

// console.log(multiplyBy5(100));

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

function makeRollCall(subject) {
  return function(students) {
    rollCall(subject, students);
  };
}

var mathRollCall = makeRollCall('Math');
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan
