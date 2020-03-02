let rlSync = require('readline-sync');

// let firstName = rlSync.question("What is your first name? ");
// let lastName = rlSync.question("What is your last name? ");
// console.log(`Hello, ${firstName} ${lastName}!`);

// let greet = (prompt) => {
//   let name = rlSync.question(prompt);
//   return name
// }

// let firstName = greet('What is your first name? ');
// let lastName = greet('What is your last name? ');
// console.log(`Hello, ${firstName} ${lastName}!`);

// let multiply = (a, b) => a * b;

// let num1 = rlSync.questionFloat("Enter the first number: ");
// let num2 = rlSync.questionFloat("Enter the second number: ");
// console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);

function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

times(times(times(times(times(1, 1), 2), 3), 4), 5);
