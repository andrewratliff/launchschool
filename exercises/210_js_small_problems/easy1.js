// odd numbers
// for (let i = 1; i <= 99; i += 1) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// function oddNumbers(start, end) {
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 1) {
//       console.log(i);
//     }
//   };
// }

// oddNumbers(10, 300);

// even numbers
// for(let i = 2; i <= 99; i += 2 ) {
//   console.log(i);
// }

// how big is the room
// let length = parseInt(prompt('Enter a length in meters:'), 10);
// let width = parseInt(prompt('Enter a width in meters:'), 10);
// let area = length * width;
// let SQM_TO_SQFT = 10.7639;

// console.log(`The area of the room is ${area} sqaure meters (${area * SQM_TO_SQFT} square feet).`);

// tip calculator
// let bill = parseFloat(prompt('What is the bill?'));
// let tip_percent = parseFloat(prompt('What is the tip percentage?'));

// let tip = bill * (tip_percent / 100);
// let total = tip + bill;

// console.log(`The tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${total.toFixed(2)}`);

// sum or product of consecutive integers
// let validAnswer = false;
// let result;

// let sumInts = (int) => {
//   let sum = 0;

//   for (let i = 1; i <= int; i += 1) {
//     sum += i;
//   }

//   validAnswer = true;
//   return sum;
// };

// let multiplyInts = (int) => {
//   let product = 1;

//   for (let i = 1; i <= int; i += 1) {
//     product *= i;
//   }

//   validAnswer = true;
//   return product;
// };

// do {
//   let int = parseInt(prompt('Please enter an integer greater than 0:'), 10);
//   let operation = prompt('Enter "s" to computer to the sum, or "p" to compute the product.');

//   if (operation === 's') {
//     console.log(`The sum of the integers between 1 and ${int} is ${sumInts(int)}.`);
//   } else if (operation === 'p') {
//     console.log(`The sum of the integers between 1 and ${int} is ${multiplyInts(int)}.`);
//   }
// } while (!validAnswer)

// short long short
// function shortLongShort(str1, str2) {
//   let long;
//   let short;

//   if (str1.length < str2.length) {
//     short = str1;
//     long = str2;
//   } else {
//     short = str2;
//     long = str1;
//   }

//   return short + long + short;
// }

// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"

// leap years part 1
// let isLeapYear = (year) => {
//   console.log((year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)));
// };

// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // false
// isLeapYear(1);         // false
// isLeapYear(100);       // false
// isLeapYear(400);       // true

// leap years part 2
// function isLeapYear(year) {
//   if (year < 1752) {
//     console.log(year % 4 === 0);
//   } else {
//     console.log((year % 4 === 0) && (year % 400 === 0 || year % 100 !== 0));
//   }
// }

// isLeapYear(2016);      // true
// isLeapYear(2015);      // false
// isLeapYear(2100);      // false
// isLeapYear(2400);      // true
// isLeapYear(240000);    // true
// isLeapYear(240001);    // false
// isLeapYear(2000);      // true
// isLeapYear(1900);      // false
// isLeapYear(1752);      // true
// isLeapYear(1700);      // true
// isLeapYear(1);         // false
// isLeapYear(100);       // true
// isLeapYear(400);       // true

// multiples of 3 and 5
// function multisum(num) {
//   let result = 0;

//   for (let i = 1; i <= num; i += 1) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       result += i;
//     }
//   };

//   console.log(result);
// }

// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168

// ascii string value
function asciiValue(str) {
  let result = 0;

  for(let i = 0; i < str.length; i += 1) {
    result += str.charCodeAt(i);
  };

  console.log(result);
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0
