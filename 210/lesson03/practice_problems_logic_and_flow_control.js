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

function isPrime(num) {
  let i;

  if (num < 2 || (num > 2 && num % 2 === 0)) {
    return false;
  }

  for (i = 3; i < num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  };

  return true;
}

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

function gcd(num1, num2) {
  let startNum = num1 < num2 ? num1 : num2;

  for (let i = startNum; i >= 2; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  };

  return 1;
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1
