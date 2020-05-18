// 1 Isn't it Odd
// function isOdd(int) {
//   return int % 2 !== 0;
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// 2 Odd Numbers
// for (let i = 1; i <= 99; i += 2) {
//   console.log(i);
// };

// let i = 1;

// while (i <= 99) {
//   console.log(i);
//   i += 2;
// };

// 3 Even Numbers
// for (let i = 2; i < 99; i += 2) {
//   console.log(i);
// };

// 4 How Big is the Room?
const readline = require('readline-sync');
const SQM_TO_SQFT = 10.7639;
let length = 0;
let width = 0;

console.log("What units would you like to use? (feet/meters)");
let units = readline.prompt();
console.log("What is the length of the room in meters?");
length = Number(readline.prompt());
console.log("What is the width of the room in meters?");
width = Number(readline.prompt());

let area = (width * length).toFixed(2);

if (units.charAt(0).toLowerCase() === 'f') {
  console.log(`The area of the room is ${area} square feet.`);
} else {
  console.log(`The area of the room is ${area} square meters.`);
}
