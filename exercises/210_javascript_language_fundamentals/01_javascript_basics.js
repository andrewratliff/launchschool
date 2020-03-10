// 01 building strings
// var paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
// ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
// dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
// ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
// diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
// hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

// console.log(paragraph);

// 02 conditionals part 1
// let myBoolean = true;
// let myString = 'hello';
// let myArray = [];
// let myOtherString = '';

// if (myBoolean) {
//   console.log('Hello');
// }

// if (!myString) {
//   console.log('World');
// }

// if (!!myArray) {
//   console.log('World');
// }

// if (myOtherString || myArray) {
//   console.log('!');
// }

// 03 conditionals part 2
// if (condition1) {
//   // ...
//   if (condition2) {
//     // ...
//   } else {
//     // ...
//   }
// } else {
//   // ...
//   if (condition4) {
//     // ...
//     if (condition5) {
//     // ...
//     }
//   }
// }

// Unique paths:
// 1. condition1 === false
//    condition4 === false
// 2. condition1 === false
//    condition4 === true
//    condition5 === false
// 3. condition1 === false
//    condition4 === true
//    condition5 === true
// 4. condition1 === true
//    condition2 === false
// 5. condition1 === true
//    condition2 === true

// 04 string assignment
// let name = 'Bob';
// let saveName = name;
// name = 'Alice';

// console.log(name, saveName);

// name = 'Bob';
// saveName = name;
// name.toUpperCase();
// console.log(name, saveName);

// // 05 arithmetic integer
// let number1 = parseInt(prompt('Enter the first number:'), 10);
// let number2 = parseInt(prompt('Enter the second number:'), 10);

// console.log(number1 + ' + ' + number2 + ' = ' + (number1 + number2));
// console.log(number1 + ' - ' + number2 + ' = ' + (number1 - number2));
// console.log(number1 + ' * ' + number2 + ' = ' + (number1 * number2));
// console.log(number1 + ' / ' + number2 + ' = ' + Math.floor(number1 / number2));
// console.log(number1 + ' % ' + number2 + ' = ' + (number1 % number2));
// console.log(number1 + ' ** ' + number2 + ' = ' + Math.pow(number1, number2));

// 06 counting the number of characters
// let rlSync = require('readline-sync');

// let phrase = rlSync.question('Please enter a phrase: ');
// let alphaPhrase = phrase.replace(/[^a-zA-Z]/g, '');

// console.log(`There are ${alphaPhrase.length} characters in "${alphaPhrase}".`);

// 07 convert a string to a number
// function stringToInteger(str) {
//   const DIGITS = {
//     '0': 0,
//     '1': 1,
//     '2': 2,
//     '3': 3,
//     '4': 4,
//     '5': 5,
//     '6': 6,
//     '7': 7,
//     '8': 8,
//     '9': 9,
//   };
//   let result = 0;

//   for (let i = 0; i < str.length; i += 1) {
//     result = (result * 10) + DIGITS[str[i]];
//   };

//   return result;
// }

// console.log(stringToInteger('123'));
// console.log(typeof stringToInteger('123'));

// 08 convert a string to a signed number
// function stringToInteger(str) {
//   const DIGITS = {
//     '0': 0,
//     '1': 1,
//     '2': 2,
//     '3': 3,
//     '4': 4,
//     '5': 5,
//     '6': 6,
//     '7': 7,
//     '8': 8,
//     '9': 9,
//   };
//   let result = 0;
//   // let signMultiplier = 1;

//   // if (str.charAt(0) === '-') {
//   //   signMultiplier = -1;
//   //   str = str.slice(1);
//   // } else if (str.charAt(0) === '+') {
//   //   str = str.slice(1);
//   // }

//   for (let i = 0; i < str.length; i += 1) {
//     result = (result * 10) + DIGITS[str[i]];
//   };

//   // return result * signMultiplier;
//   return result;
// }

// // LS Solution
// function stringToSignedInteger(str) {
//   if (str.charAt(0) === '-') {
//     return -1 * stringToInteger(str.slice(1));
//   } else if (str.charAt(0) === '+') {
//     return stringToInteger(str.slice(1));
//   } else {
//     return stringToInteger(str);
//   }
// }

// console.log(stringToSignedInteger('-123'));
// console.log(stringToSignedInteger('+123'));
// console.log(stringToSignedInteger('123'));

// 09 convert a number to a string
function integerToString(int) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  result = '';

  do {
    result = DIGITS[int % 10] + result;
    int = Math.floor(int / 10);
  }
  while (int !== 0)

  return result;
}

// console.log(integerToString(123));
// console.log(typeof integerToString(123));

// 10 convert a signed number to a string
function integerToSignedString(int) {
  if (int < 0) {
    return '-' + integerToString(int * -1);
  } else if (int > 0) {
    return '+' + integerToString(int);
  } else {
    return integerToString(int);
  }
}

console.log(integerToSignedString(-123));
console.log(integerToSignedString(123));
console.log(integerToSignedString(0));
