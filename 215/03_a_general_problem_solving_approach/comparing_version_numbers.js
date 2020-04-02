// problem
// input:
//   - 2 strings
//   - v1 and v2
//
// output:
//   - number (null, 1, -1, or 0)
//
// examples
//   - if there are invalid charaters, return null (any non-number or .)
//   - compare the two input versions
//     - if v1 > v2, return 1
//     - if v1 < v2, return -1
//     - if v1 === v2, return 0
//
//  0.1 < 1 = 1.0 < 1.1.3 < 1.1.4 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37
//
//  Rules for compaing version numbers:
//  - we can break each number up on the decimals and compare the numbers from
//    left to right
//  - 1.2 becomes [1, 2]
//  - 1.2.0.0 becomes [1, 2, 0, 0]
//  - as we compare left to right we can return as soon as numbers are not equal
//  - if the versions are different lengths, the longer version is greater as
//    soon as we get to a number that is not zero
//
// data structure
//   - prepare our data in an array of numbers
//   - con
//
// algo
//   - convert input data into our data structure of choice
//   - express steps to produce outputs, using methods and abstractions
//     available on the data structure
//
//   - return null if the inputs contain any characters other than digits and
//     dots
//   - split the input numbers into parts as arrays of integers
//   - loop through the two version numbers' parts
//     - for each step, access one part from each version number
//     - if one version number runs out of parts, use 0
//     - compare the two parts
//       - if part1 < part2
//         - return -1
//       - if part1 > part2
//         - return 1
//       - if part1 === part2
//         - move to the next pair
//       - when we reach the end, return 0
//
//
// code

let compareVersions = (versionA, versionB) => {
  let validChars = /^[0-9]+(\.[0-9]+)*$/;

  if (!validChars.test(versionA) || !validChars.test(versionB)) {
    return null;
  }

  let aParts = versionA.split('.').map(Number);
  let bParts = versionB.split('.').map(Number);

  let maxLength = Math.max(aParts.length, bParts.length);

  for (let i = 0; i < maxLength; i += 1) {
    let aValue = aParts[i] || 0;
    let bValue = bParts[i] || 0;

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    }
  }

  return 0;
};

console.log(compareVersions('1', '1'));         // 1
console.log(compareVersions('1.1', '1.0'));     // 1
console.log(compareVersions('2.3.4', '2.3.5')); // -1
console.log(compareVersions('1.a', '1'));       // null
console.log(compareVersions('.1', '1'));        // null
console.log(compareVersions('1.', '1'));        // null
console.log(compareVersions('1..0', '1'));      // null
console.log(compareVersions('1.0', '1.0.0'));   // 0
console.log(compareVersions('1.0.0', '1.1'));   // -1
console.log(compareVersions('1.0', '1.0.1'));   // -1
