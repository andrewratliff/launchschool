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
// - convert the string to an array
//   - iterate through each char in the string
//   - add numbers to a new string
//   - when it reaches a comma,
//     - check last number in the output array
//     - if that last number is less than current number, push current number to
//     the output array
//     - else add 10 to the current number until it is greater than the last
//     number in the output array
//     - push to the output array
//   - if it's a separator
//     - add separator to the array
// - expand ranges
//   - iterate through array
//     - add the numbers to a new array
//     - when element is a -, skip
//     - when the previous element is a dash
//       - iterate from last number in the array
//       - add each element
//   - if the previous element is a -, loop from last element in the array to
//   the current element, adding each number to the output array

let determineNumber = (lastNumber, significantDigits) => {

};

let convertToArray = cleanedString => {
  let numberString = '';
  let result = [];

  cleanedString.split('').forEach(char => {
    if (char === ',') {
      result.push(determineNumber(result[result.length - 1], numberString));
      numberString = '';
    } else if (char === '-') {
      result.push(char);
      numberString = '';
    } else {
      numberString += char;
    }
  });
};

let completeNumbers = numStr => {
  let cleaned = numStr.replace(/\s/g, '').replace(/\.\.|:/g, '-');
  let array = convertToArray(cleaned);

  return expandRanges(array);
}


console.log(completeNumbers('1, 3, 7, 2, 4, 1') === [1, 3, 7, 12, 14, 21]);
console.log(completeNumbers('1, 3, 7, 2, 4, 1') === [1, 3, 7, 12, 14, 21]);
console.log(completeNumbers('1, 2, 1, 2') === [1, 2, 11, 12]);

// Ranges
console.log(completeNumbers('1-3, 1-2') === [1, 2, 3, 11, 12]);
console.log(completeNumbers('1..3, 1-2') === [1, 2, 3, 11, 12]);
console.log(completeNumbers('1:5:2') === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log(completeNumbers('104-02'); // --> 104, 105, ... 202
