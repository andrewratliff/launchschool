// let a = prompt('Enter a number');

// if (a === '3') {
//   console.log("a is 3");
// } else if (a === '4') {
//   console.log("a is 4");
// } else {
//   console.log("a is neither 3, nor 4");
// }

// let b = 5;

// switch (b) {
//   case 5:
//     console.log('b is 5');
//     b = 1;
//   case 6:
//     console.log('b is 6');
//     break;
//   default:
//     console.log('b is neither 5, nor 6');
//     break;
// };

// let evenOrOdd = (number) => {
//   if (typeof number !== 'number') {
//     console.log('you must enter a number');
//     return;
//   }

//   if (number % 2 === 0) {
//     console.log('even');
//   } else {
//     console.log('odd');
//   }
// };

// evenOrOdd('0');
// evenOrOdd(2);
// evenOrOdd(5);

// return foo() ? 'bar' : qux();

// if (foo()) {
//   return 'bar';
// } else {
//   return qux();
// }

// function toCaps(words) {
//   // if (words.length > 10) {
//   //   return words.toUpperCase();
//   // } else {
//   //   return words;
//   // }

//   return ((words.length > 10) ? words.toUpperCase() : words);
// }

// console.log(toCaps("hello world"));
// console.log(toCaps("goodbye"));

function numRange(number) {
  if (number > 0 && number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number > 50 && number <= 100) {
    console.log(`${number} is between 50 and 100`);
  } else if (number > 100) {
    console.log(`${number} is greater than 100`);
  } else {
    console.log(`${number} is negative`);
  }
}

numRange(25);
numRange(55);
numRange(100);
numRange(1000);
numRange(-1000);
