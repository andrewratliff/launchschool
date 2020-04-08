// 01 Rotation Part 1
// Problem:
// Write a function that rotates an array by moving the first element to the end
// of the array. Do not modify the original array.
// - If the input is not an array, return undefined.
// - If the input is an empty array, return an empty array.
//
// We need to create a new result array
//
// take all the elements from index 1 to the end and add them to the new array
// add element at index 0 to the end of the new array
//
// Data Structures:
// Input: array
// output: array (except for exceptions -> handle with guard clause)
//
// Algorithm:
// if the input is not an array return undefined
// if the input is an empty array return []
//
// return input.slice(1).push(input[0])

let rotate = arr => {
  if (Array.isArray(arr)) {
    if (arr.length === 0) return arr;

    return arr.slice(1).concat(arr[0]);
  }
};

// Examples:
// console.log(rotate([1, 2, 3])); // [2, 3, 1]
// console.log(rotate('')); // undefined
// console.log(rotate([])); // []
// console.log(rotate(['a'])); // ['a']

// 02 Rotation Part 2
// Problem:
// Write a function that rotates the last n digits of a number. For the
// rotation, rotate by one digit to the left, moving the first digit to the end.
//
// Out function takes 2 numbers: a number and n number of digits to rotate
// We need to break off the last n digits, rotate them, then join it back to the
// first part of the number
//
// Data Structures:
// Input: number
// Output: Number
//
// Algorithm:
// - Transform the input number to an array of strings
// - calculate the break point of the array -> length - (n + 1)
// - first half = elements 0 to break point
// - second half = elements from breakpoint to length - 1
// - rotate second half
// - join first and second half
// - convert to a number and return
//

let rotateRightmostDigits = (number, n) => {
  let arr = String(number).split('');
  let index = arr.length - n;
  let first_half = arr.slice(0, index);
  let second_half = rotate(arr.slice(index));

  return parseInt(first_half.concat(second_half).join(''), 10);
};

// Examples:
// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917

// 03 Rotation Part 3
//
// Problem:
// Take the number 735291 and rotate it by one digit to the left,
// getting 352917. Next, keep the first digit fixed in place and rotate the
// remaining digits to get 329175. Keep the first two digits fixed in place and
// rotate again to get 321759. Keep the first three digits fixed in place and
// rotate again to get 321597. Finally, keep the first four digits fixed in
// place and rotate the final two digits to get 321579. The resulting number is
// called the maximum rotation of the original number.

// Write a function that takes an integer as an argument, and returns the
// maximum rotation of that integer. You can (and probably should) use the
// rotateRightmostDigits function from the previous exercise.
//
// loop from length - 1 to 1
// call rotateRightmostDigits for each value of i

let maxRotation = num => {
  for (let i = String(num).length; i > 0; i -= 1) {
    num = rotateRightmostDigits(num, i);
  }

  return num;
};

// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845

// 04 Stack Machine Interpretation
// Problem:
// Given a string input
// Assume all input is valid
//
// Break the input up on spaces and iterate through the array
// if the input is a number -> add it to the register
//
// PUSH -> push the register onto the stack array
// ADD/SUB/MULT/DIV/MOD pop value from the stack and perform operation with the
// value in the register -> register becomes the result
// POP -> remove top of the stack and place it in the register
// PRINT -> log register value
//
// Convert values to numbers before pushing to stack/register
//
// Data Structures:
// Input: string
// Stack: []
// Register: 0
//
// Algorithm:
// Split the input on spaces
// foreach of the inputs
// if Number.isNumber
//   register = input
// if push
//   stack.push register
// if print
//   console log register
// if add
//   register += stack.pop
// if sub
//   register -= stack.pop
// if mult
//   register *= stack.pop
// if div
//   register /= stack.pop
// if mod
//   register %= stack.pop
//

let minilang = input => {
  let register = 0;
  let stack = [];

  input.split(' ').forEach(value => {
    if (Number.isInteger(Number(value))) {
      register = Number(value);
    } else if (value === 'PRINT') {
      console.log(register);
    } else if (value === 'PUSH') {
      stack.push(register);
    } else if (value === 'POP') {
      register = stack.pop();
    } else if (value === 'ADD') {
      register += stack.pop();
    } else if (value === 'SUB') {
      register -= stack.pop();
    } else if (value === 'MULT') {
      register *= stack.pop();
    } else if (value === 'DIV') {
      register = Math.floor(register / stack.pop());
    } else if (value === 'MOD') {
      register = Math.floor(register % stack.pop());
    }
  });
};

// Examples:
// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

// 05 Word to Digit
// Write a function that takes a sentence string as an argument, and returns
// that string with every occurrence of a "number word" — 'zero', 'one', 'two',
// 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its
// corresponding digit character.
//
// Break the input on spaces and map, replacing number words with number
//
// Data Structures:
// Array of number words ['zero', 'one' ....]
//
// Algorithm:
// input.split.map
//   if numberWords includes teh current value return the index of the value

// Example:

let wordToDigit = input => {
  let numberWords = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ]

  return input.split(' ').map(value => {
    if (numberWords.includes(value)) {
      return numberWords.indexOf(value);
    } else {
      return value;
    }
  }).join(' ');
};

// student submission
wordToDigit = string => {
  const stringWords = ['zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine'];

  const regex = new RegExp(`\\b(${stringWords.join('|')})\\b`, 'gi');

  return string.replace(regex, (match) => stringWords.indexOf(match));
}

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// 06 Fibonacci Numbers (Recursion)
// Write a recursive function to calculate the nth fibonacci number
//
// Our function takes a number
// Return 1 if the number is 1 or 2
//
// other wise, call fibonacci with n - 1 until we get to 2

// 3
//
//

// let fibonacci = n => {
//   if (n === 2 || n === 1) {
//     return 1;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// };

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765

// 07 Fibonacci Numbers (Procedural)
// let fibonacci = n => {
//   let previous = 1;
//   let fib = 1;

//   if (n === 2 || n === 1) {
//     return fib;
//   } else {

//     for (let i = 3; i <= n; i += 1) {
//       let temp =  fib;

//       fib = previous + fib;
//       previous = temp;
//     }
//   }

//   return fib;
// };

// console.log(fibonacci(20));       // 6765
// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050

// 08 Fibonacci Numbers (Memoization)
let memo = {};

let fibonacci = n => {
  if (n === 2 || n === 1) {
    return 1;
  } else {
    if (memo[n] === undefined) {
      memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    }

    return memo[n];
  }
};

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765
// console.log(fibonacci(60));
