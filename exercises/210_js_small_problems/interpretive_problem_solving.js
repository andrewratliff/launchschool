// 02 Diamonds
// Write a function that displays a four-pointed diamond in an nxn grid, where
// n is an odd integer supplied as an argument to the function. You may assume
// that the argument will always be an odd integer.

// Understanding the Problem:
// input:
// what happens when the number is 0, negative, even?
//
// output:
// return a string delimited with \n characters?
// console.log directly from the function
//
// model the problem:
// given an odd number n, eg 5
// output n strings
//  - 1, 3, 5, 3, 1
//  - prepend the number of spaces 2, 1, 0, 1, 2
// join together with \n or loop and print

let diamond = num => {
  for(let i = 1; i < num; i += 2) {
    let spaces = ' '.repeat((num - i) / 2);
    let asterix = '*'.repeat(i);

    console.log(spaces + asterix + spaces);
  }

  for (let i = num; i >= 1; i -= 2) {
    let spaces = ' '.repeat((num - i) / 2);
    let asterix = '*'.repeat(i);

    console.log(spaces + asterix + spaces);
  }
};

diamond(1);
// logs
// *

diamond(3);
// logs
 // *
// ***
 // *

diamond(9);
// logs
    // *
   // ***
  // *****
 // *******
// *********
 // *******
  // *****
   // ***
    // *
