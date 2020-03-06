// odd numbers

// function logOddNumbers(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// }

// function logOddNumbers(num) {
//   for (let i = 1; i <= num; i += 2) {
//     console.log(i);
//   };
// }

// function logOddNumbers(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//       continue;
//     }

//     console.log(i);
//   };
// }

// logOddNumbers(19);

// multiples of 3 and 5

// function multiplesOfThreeAndFive(min = 1, max = 100) {
//   for (let i = min; i <= max; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`${i}!`);
//     } else if (i % 3 == 0) {
//       console.log((i).toString());
//     } else if (i % 5 == 0) {
//       console.log((i).toString());
//     }
//   };
// }

// multiplesOfThreeAndFive(2, 20);

// print multiples

// let logMultiples = (num) => {
//   for (let i = 100; i > 0; i--) {
//     if (i % num === 0 && i % 2 === 1) {
//       console.log(i);
//     }
//   }
// };

// console.log('logging multiples of 17:');
// logMultiples(17);

// console.log('logging multiples of 21:');
// logMultiples(21);

// function isEven(num) {
//   return num % 2 === 0;
// }

// function logMultiples(num) {
//   let highestMultiple = Math.floor(100 / num) * num;

//   for (let i = highestMultiple; i > 0; i -= num) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   };
// }

// logMultiples(17);
// logMultiples(21);

// fizzbuzz

// function fizzbuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   };
// }

// fizzbuzz();

// prime check

// function isPrime(num) {
//   let i;

//   if (num < 2 || (num > 2 && num % 2 === 0)) {
//     return false;
//   }

//   for (i = 3; i < num; i += 2) {
//     if (num % i === 0) {
//       return false;
//     }
//   };

//   return true;
// }

// console.log(isPrime(1));   // false
// console.log(isPrime(2));   // true
// console.log(isPrime(3));   // true
// console.log(isPrime(43));  // true
// console.log(isPrime(55));  // false
// console.log(isPrime(0));   // false

// XOR

// let isXor = (bool1, bool2) => {
//   if ((bool1 && !bool2) || (!bool1 && bool2)) {
//     return true;
//   }

//   return false;
// };

// let isXor = function(bool1, bool2) {
//   return !!((bool1 && !bool2) || (!bool1 && bool2))
// };

// console.log(isXor(false, true));     // true
// console.log(isXor(true, false));     // true
// console.log(isXor(false, false));    // false
// console.log(isXor(true, true));      // false

// console.log(isXor(false, 3));        // true
// console.log(isXor('a', undefined));  // true
// console.log(isXor(null, ''));        // false
// console.log(isXor('2', 23));         // false

// guessing the password

// let counter = 0;
// let guess;
// let message = 'What is the password:'
// let password = 'password';

// do {
//   counter++;
//   guess = prompt(message);

//   if (guess === password) {
//     console.log('You have successfully logged in.');
//     break;
//   }

//   if (counter === 3) {
//     console.log('You have been denied access.');
//   }
// } while (counter < 3);

// student grade
// function calculateScores() {
//   let numScores = parseInt(prompt('How many scores do you want to enter?'), 10);
//   let scores = [];

//   for (let i = 1; i <= numScores; i++) {
//     let message = `Enter score ${i}:`
//     scores.push(prompt(message));
//   };

//   let average = scores.reduce((total, score) => total += parseInt(score, 10), 0) / numScores;
//   let letterGrade;

//   if (average >= 90) {
//     letterGrade = 'A';
//   } else if (average >= 70) {
//     letterGrade = 'B';
//   } else if (average >= 50) {
//     letterGrade = 'C';
//   } else if (average >= 60) {
//     letterGrade = 'D';
//   } else {
//     letterGrade = 'F';
//   }

//   console.log(`Based on the average of your ${numScores} scores you letter grade is "${letterGrade}".`);
// }

// calculateScores();

// function gcd(num1, num2) {
//   let startNum = num1 < num2 ? num1 : num2;

//   for (let i = startNum; i >= 2; i--) {
//     if (num1 % i === 0 && num2 % i === 0) {
//       return i;
//     }
//   };

//   return 1;
// }

// console.log(gcd(12, 4));   // 4
// console.log(gcd(15, 10));  // 5
// console.log(gcd(9, 2));    // 1

// goldbach numbers (uses isPrime() from earlier exercise)

// let checkGoldbach = (num) => {
//   if ((num % 2 !== 0) || (num <= 3)) {
//     return null;
//   }

//   // let results = [];

//   // for (let i = 2; i < num; i++) {
//   //   if (isPrime(i)) {
//   //     for (let j = 2; j < num; j++) {
//   //       if (isPrime(j)) {
//   //         if ((i + j === num) && !(results.includes(i))) {
//   //           results.push(i, j)
//   //         }
//   //       }
//   //     };
//   //   }
//   // }

//   // return results;

//   var i;
//   var j = num;

//   for (i = 2; i < j; i += 1) {
//     j = num - i;

//     if (isPrime(i) && isPrime(j) && (i + j === num)) {
//       console.log(`${i} ${j}`);
//     }
//   }
// };

// console.log(checkGoldbach(100));

// pattern generation

// let generatePattern = (num) => {
//   // let asterisks = Array(num).map(() => '*')

//   // console.log(asterisks);

//   let asterisks = []

//   for (let i = 0; i < num; i += 1) {
//     asterisks.push('*');
//   }

//   for (let i = 0; i < num; i += 1) {
//     asterisks[i] = i + 1;
//     console.log(asterisks.join(''));
//   }
// };

// generatePattern(20);

// index of a substring

// function indexOf(str1, str2) {
//   let index = -1;

//   for (let i = 0; i < str1.length; i += 1) {
//     let endIndex = i + str2.length;

//     if (endIndex > str1.length) {
//       break;
//     }

//     if (str1.slice(i, endIndex) === str2) {
//       index = i;
//       break;
//     }
//   };

//   return index;
// }

// function lastIndexOf(str1, str2) {
//   let index = -1;

//   for (let i = 0; i < str1.length; i += 1) {
//     let endIndex = i + str2.length;

//     if (endIndex > str1.length) {
//       break;
//     }

//     if (str1.slice(i, endIndex) === str2) {
//       index = i;
//     }
//   };

//   return index;
// }


// console.log(indexOf('Some strings', 's'));
// console.log(indexOf('Blue Whale', 'Whale'));
// console.log(indexOf('Blue Whale', 'Blute'));
// console.log(indexOf('Blue Whale', 'leB'));

// console.log(lastIndexOf('Some strings', 's'));
// console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
// console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1

// trimming spaces

// function trim(str) {
//   let startIndex = 0;
//   let endIndex = 0;

//   for (let i = startIndex; i < str.length; i += 1) {
//     if (str[i] !== ' ') {
//       startIndex = i;
//       endIndex = i;
//       break;
//     }
//   };

//   for (let i = str.length - 1; i > startIndex; i -= 1) {
//     if (str[i] !== ' ') {
//       endIndex = i + 1;
//       break;
//     }
//   };

//   console.log(str.slice(startIndex, endIndex));
// }

// trim('  abc  ');  // "abc"
// trim('abc   ');   // "abc"
// trim(' ab c');    // "ab c"
// trim(' a b  c');  // "a b  c"
// trim('      ');   // ""
// trim('');         // ""

// splitting a string

// function splitString(string, delimiter) {
//   let substring = '';

//   if (delimiter === undefined) {
//     console.log('ERROR: No delimiter');
//     return;
//   }

//   for (let i = 0; i <= string.length; i += 1) {
//     if ((string[i] === delimiter) || (i === string.length)) {
//       console.log(substring);
//       substring = '';
//     } else if (delimiter === '') {
//       console.log(string[i]);
//     } else {
//       substring += string[i];
//     }
//   };

//   if (substring) {
//     console.log(substring);
//   }
// }

// splitString('abc,123,hello world', ',');
// // logs:
// // abc
// // 123
// // hello world

// splitString('hello');
// // // logs:
// // // ERROR: No delimiter

// splitString('hello', '');
// // // logs:
// // // h
// // // e
// // // l
// // // l
// // // o

// splitString('hello', ';');
// // // logs:
// // // hello

// splitString(';hello;', ';');
// // // logs:
// // //  (this is a blank line)
// // // hello

// repeat strings

// function repeat(string, times) {
//   if (!Number.isInteger(times) || times < 0) {
//     return;
//   }

//   let result = '';

//   for (let i = 0; i < times; i += 1) {
//     result += string;
//   };

//   return result;
// }

// console.log(repeat('abc', 1));       // "abc"
// console.log(repeat('abc', 2));       // "abcabc"
// console.log(repeat('abc', -1));      // undefined
// console.log(repeat('abc', 0));       // ""
// console.log(repeat('abc', 'a'));     // undefined
// console.log(repeat('abc', false));   // undefined
// console.log(repeat('abc', null));    // undefined
// console.log(repeat('abc', '  '));    // undefined

// string StartsWith

// function startsWith(string, seachString) {
//   // if (seachString.length > string.length) {
//   //   return false;
//   // } else if (!seachString) {
//   //   return true;
//   // }

//   for (let i = 0; i < seachString.length; i += 1) {
//     if (string[i] !== seachString[i]) {
//       return false;
//     }
//   };

//   return true;
// }

// var str = 'We put comprehension and mastery above all else';
// console.log(startsWith(str, 'We'));              // true
// console.log(startsWith(str, 'We put'));          // true
// console.log(startsWith(str, ''));                // true
// console.log(startsWith(str, 'put'));             // false

// var longerString = 'We put comprehension and mastery above all else!';
// console.log(startsWith(str, longerString));      // false

// converting strings to lower case

// function toLowerCase(string) {
//   let result = '';
//   const OFFSET = 32

//   for (let i = 0; i < string.length; i += 1) {
//     let letter = string[i];
//     let asciiNumeric = letter.charCodeAt(0);

//     if (letter >= 'A' && letter <= 'Z') {
//       asciiNumeric += OFFSET;
//     }

//     result += String.fromCharCode(asciiNumeric);
//   };

//   return result;
// }

// console.log(toLowerCase('ALPHABET'));    // "alphabet"
// console.log(toLowerCase('123'));         // "123"
// console.log(toLowerCase('abcDEF'));      // "abcdef"

// substring(1)

// function substr(string, start, length) {
//   let result = '';

//   if (start < 0) {
//     start = string.length + start;
//   }

//   for (let i = start; i < start + length; i += 1) {
//     result += string[i];

//     if (string[i + 1] === undefined) {
//       break;
//     }
//   };

//   return result;
// }

// var string = 'hello world';

// console.log(substr(string, 2, 4));      // "llo "
// console.log(substr(string, -3, 2));     // "rl"
// console.log(substr(string, 8, 20));     // "rld"
// console.log(substr(string, 0, -20));    // ""
// console.log(substr(string, 0, 0));      // ""

// substring(2)

// function checkIndex(index, length) {
//   if (index < 0 || isNaN(index)) {
//     index = 0;
//   } else if (index > length) {
//     index = length;
//   }

//   return index;
// }

// function substring(string, start, end) {
//   let result = '';
//   let length = string.length;

//   if (end === undefined) {
//     end = length;
//   }

//   start = checkIndex(start, length);
//   end = checkIndex(end, length);

//   if (start > end) {
//     let temp = start;
//     start = end;
//     end = temp;
//   }

//   if (start === end) {
//     return '';
//   }

//   for (let i = start; i < end; i += 1) {
//     result += string[i];
//   };

//   return result;
// }


// var string = 'hello world';

// console.log(substring(string, 2, 4));    // "ll"
// console.log(substring(string, 4, 2));    // "ll"
// console.log(substring(string, 0, -1));   // ""
// console.log(substring(string, 2));       // "llo world"
// console.log(substring(string, 'a'));     // "hello world"
// console.log(substring(string, 8, 20));   // "rld"
