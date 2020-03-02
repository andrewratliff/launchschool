let rlSync = require('readline-sync');

let number1 = rlSync.questionInt('Enter the first number\n');
let number2 = rlSync.questionInt('Enter the second number\n');
let sum = number1 + number2;

console.log(sum);
