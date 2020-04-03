// Problem Description
// You are given a list of numbers in a "short-hand" range where only the
// significant part of the next number is written because we know the numbers
// are always increasing (ex. "1, 3, 7, 2, 4, 1" represents
// [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges
// (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers
// [1, 2, 3, 11, 12]). Range limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]

// Input: string of comma separated numbers
// Output: array of numbers
//
// Examples:
//     "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
//     "1-3, 1-2" --> 1, 2, 3, 11, 12
//     "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
//     "104-2" --> 104, 105, ... 112
//     "104-02" --> 104, 105, ... 202
//     "545, 64:11" --> 545, 564, 565, .. 611
//
// Data Structures:
// - convert input string to array of each character
// - empty array to add numbers to as we iterate
// - out put array
//
// Algorithm:
// - clean the string -> replace all separators with a '-' and remove spaces
// - iterate through each char in the string
//   -
// - if it's a number
//   - check last number in the output array
//     - if that last number is less than current number, push current number to
//     the end of the array
//     - else add 10 to the current number until it is greater than the last
//     number in the output array
//     - push to the output array
// - if it's a separator
//   - iterate from the last number to next number in the list, adding each
//   number to the array

let completeNumbers = numStr => {
  let cleaned = numStr.replace(/\s/g, '').replace(/\.\.|:/g, '-');
  let array = convertToArrat(cleaned);

  console.log(cleaned);
}


console.log(completeNumbers('1, 3, 7, 2, 4, 1') === [1, 3, 7, 12, 14, 21]);
console.log(completeNumbers('1, 3, 7, 2, 4, 1') === [1, 3, 7, 12, 14, 21]);
console.log(completeNumbers('1, 2, 1, 2') === [1, 2, 11, 12]);

// Ranges
console.log(completeNumbers('1-3, 1-2') === [1, 2, 3, 11, 12]);
console.log(completeNumbers('1..3, 1-2') === [1, 2, 3, 11, 12]);
console.log(completeNumbers('1:5:2') === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
