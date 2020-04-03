// Problem:
// The Luhn formula is a simple checksum formula used to validate a variety of
// identification numbers, such as credit card numbers and Canadian Social
// Insurance Numbers
//
// The formula verifies a number against its included check digit, which is
// usually appended to a partial number to generate the full number. This number
// must pass the following test:
//
// - Counting from the rightmost digit and moving left, double the value of
//   every second digit
// - For any digit that thus become 10 or more, subtract 9 from the result
//   - 111 becomes 2121
//   - 8763 becomes 7723 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7
//
// - Add all these digits together
//   - 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
//   - 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
//
// If the total (the checksum) ends in 0 (total % 10 === 0), then the number is
// valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not
// valid.
//
// Write a program that, given a number in string format, check if it is valid
// per the Luhn formula. This should treat, for example, "2323 2005 7766 3555"
// as valid. You can ignore all non-numeric characters in the input string.
//
// Input: Sting of numbers
// Output: boolean of whether or not it is a valid Luhn
//
// Data structures:
// - array since we have to iterate and evenually reduce
//
// Algorithm:
// - clean the string to only have digits and convert an array of numbers
// - iterate from the length of the array - 1 to 0 by indexes
//   - double every other element
//   - if the doubled element > 10, subtract 9
//   - save the new value to a new array
// - sum all the digits of the new array to get the checksum
// - if checksum % 10 === 0 return true; else return false

let getCleanNumbers = numStr => numStr.replace(/\D/g, '').split('').map(Number).reverse();
let checkValidLuhn = numStr => getChecksum(numStr) % 10 === 0;

let getChecksum = numStr => {
  let numbers = getCleanNumbers(numStr);
  let checksum = 0;

  numbers.forEach((digit, index) => {
    if (index % 2 !== 0) {
      digit *= 2;

      if (digit >= 10) {
        digit -= 9;
      }
    }

    checksum += digit;
  });

  return checksum;
};

// Examples:
// console.log(checkValidLuhn('2323 2005 7766 3554')); // true
// console.log(checkValidLuhn('1111'));                // false
// console.log(checkValidLuhn('8763'));                // true

// Second Problem:
// Write a function that can add a check digit to make the number valid per the
// Luhn formula and return the original number plus that digit. This should give
// "2323 2005 7766 3554" in response to "2323 2005 7766 355"
//
// if the number is valid -> return the number
//
// if the number is not valid
//   - loop through the digits 0 - 9, appending on each iteration
//      - if the number is valid -> return the number formatted correctly
//      - if it's not valid, try the next one

let makeValidLuhn = numStr => {
  if (checkValidLuhn(numStr)) return numStr;

  for (let i = 0; i <= 9; i += 1) {
    let newNumStr = numStr + String(i);

    if (checkValidLuhn(newNumStr)) return newNumStr;
  }

  return null;
};

console.log(makeValidLuhn('2323 2005 7766 355') === '2323 2005 7766 3554');
console.log(makeValidLuhn('2323 2005 7766 3554') === '2323 2005 7766 3554');
console.log(makeValidLuhn('1111') === '11114');
console.log(makeValidLuhn('2324') === '23242');
