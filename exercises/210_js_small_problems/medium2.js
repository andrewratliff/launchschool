// 01 Lettercase Percentage Ratio
// Problem:
// Input: string
// Output: object -> 3 properties lower, upper, neither
//
// Function that takes a string
// finds the % of lower case
// % upper case
// % of neither case
//
// Data Structures:
// Possibly do this all with strings until we have to put it in the result obj
//
// Algorithm:
// create 3 regexes:
// - match lowercase
// - match uppercase
// - match non letters
//
// Find the length of the input string
// Find the length of the three matches
//
// divide matches by length and format to 2 decimal places (toFixed(2))
//
// return object literal

let letterPercentages = str => {
  const length = str.length;
  const lowerCase = (str.match(/[a-z]/g) || []).length;
  const upperCase = (str.match(/[A-Z]/g) || []).length;
  const neither = (str.match(/[^a-zA-Z]/g) || []).length;

  return {
    'lowercase': (lowerCase / length * 100).toFixed(2),
    'uppercase': (upperCase / length * 100).toFixed(2),
    'neither': (neither / length * 100).toFixed(2),
  }
};

// console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// 02 Triangle Sides
// Problem:
// Write a function that takes three number (sides of a triangle) and determine if
// the triangle is value, equilateral, isosceles, or scalene
//
// invalid: the sum of the two smallest sides < biggest size || any side === 0
// equilateral: all three sides are the same
// isosceles: two sides of the same length
// scalene: all three sides are different lengths
//
// Input: 3 numbers
// Output: string of triangle type
//
// Data Structures:
// array of sorted arguments
//
// Algorithm:
// - sort arguments from small to large
// - determine invalid triangle
//   - sum of first two sides < third side
//   - any arguments is zero
// - transform arugments into a set
//   - if the length of the set is 1 return equilateral
//   - if the length of the set is 2 return isosceles
//   - else return scalene

// let triangle = (...args) => {
//   let sides = args.sort((a,b) => a - b);
//   let uniqSides = [... new Set(sides)];

//   if (invalid(sides)) {
//     return 'invalid';
//   } else if (uniqSides.length === 1) {
//     return 'eqilateral';
//   } else if (uniqSides.length === 2) {
//     return 'isosceles';
//   } else {
//     return 'scalene';
//   }
// };

// const invalid = sides => {
//   return (sides[0] + sides[1]) < sides[2] || sides.some(zero);
// };

// const zero = element => element === 0;

// Examples:
// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"

// 03 Tri-Angles
// Problem:
// right - one angle exactly 90 degrees
// acute - all three angles less than 90 degrees
// obtuse - one angle greater than 90
//
// sum of angles must be 180 and every angle must be > 0
//
// Input: 3 number array of angles
// Output: string of triangle type
//
// Data Structures:
// - operate only on input array
//
// Algorithm:
// - invalid triangle?
//   - sum of angles is greater than 180
//   - any angles equal zero?
//   - return 'invalid'
// - check if one angle is exactly 90 -> return right
// - check if one angle is > 90 -> return obtuse
// - check that all angles are less than 90 -> return acute

let triangleType = angles => {
  if (angles.some(angle => angle === 90)) {
    return 'right';
  } else if (angles.some(angle => angle > 90)) {
    return 'obtuse';
  } else if (angles.every(angle => angle < 90)) {
    return 'acute';
  };
};

let invalidTriangle = angles => {
  return angles.reduce((sum, angle) => sum += angle, 0) !== 180 ||
    angles.some(angle => angle === 0);
};

let triangle = (...angles) => {
  if (invalidTriangle(angles)) {
    return 'invalid'
  }

  return triangleType(angles);
};

// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"
// 04 Unlucky Days
// Problem:
// Input: year as a number
// Output: number that is the count of Friday the 13ths that occur in th year
//
// Date.prototype.getDay() === 5 -> friday
//
// Loop through all the months in a year and check to see if the 13th of the
// month is a Friday
//
// Data structure:
// Array reduced to only months that have Friday 13th -> return the length
//
// Algorithm:
// - create array from 1 - 12
// - reduce the array to only months that have a Friday the 13th
//   - new Date(`${year}-${month}-13`).getDay() === 5
// - return the length of the mapped array
// Array of number from 1-12.. reduce the array down to only mon

let fridayThe13ths = year => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].filter(month => {
    return new Date(`${year}-${month}-13`).getDay() === 5;
  }).length;
};

// console.log(fridayThe13ths(1986));      // 1
// console.log(fridayThe13ths(2015));      // 3
// console.log(fridayThe13ths(2017));      // 2

// 05 Next Featured Number Higher than a Given Value
// Problem:
// featured number: odd number that is a multiple of 7, with all digits occuring
// only once
//
// Input: number
// Output: number (featured number higher than the input)
//
// Take in a number and return the next highest featured number
// If there is no next highest return an error message
//
// Algorithm:
// Find the next multiple of 7 from the given number
// Iterate from the next multiple, by 7
//     - checkFeatured
//       - turn the string into an array of digits
//       - create a set of the array
//       - if the size of the set and the length of the array are equal, it's a
//       featured number

let isFeatured = multipleOfSeven => {
  const digits = String(multipleOfSeven).split('');
  const uniqDigits = new Set(digits);

  return digits.length === uniqDigits.size && multipleOfSeven % 2 !== 0;
}

let featured = given => {
  const nextMultiple = given + (7 - (given % 7));
  const lastFeatured = 9876543201;

  for (let i = nextMultiple; i <= lastFeatured; i += 7) {
    if (isFeatured(i)) {
      return i;
    }
  }

  return 'There is no next featured number';
};

// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987

// 06 Sum Square - Square Sum
// Problem:
// Write a function that calculates the difference between the square of the sum
// of the first n positive integers and the sum of the squares of teh first n
// positive integers.
//
// Input: number
// Output: number
//
// Data Structures
// [1, 2, 3] -> sum then square
//
// Algorithm:
// create an array from 1 to the given number
// - sumSquare = reduce array with addition and square
// - squareSum = reduce the array, squaring elements first, then adding
// - return sumSquare - squareSum

let sumSquareDifference = num => {
  const range = Array(num).fill().map((_, idx) => idx + 1);
  const sumSquare = range.reduce((sum, el) => sum += el, 0) ** 2;
  const squareSum = range.reduce((sum, el) => sum += el ** 2, 0);

  return sumSquare - squareSum;
};

// console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(10));     // 2640
// console.log(sumSquareDifference(1));      // 0
// console.log(sumSquareDifference(100));    // 25164150

// 07 Bubble Sort
// Problem:
// Use the bubble sort algorithm to sort an array.
// Iterate through the array multiple times comparing two adjacent values each
// time. If a larger value appears before a smaller value, reverse the two
// elements in place.
//
// The algorithm is done when no sorts have been made when iterating.
//
// Data Structures:
// input array will be changed in place
// use a boolean to keep track if a swap has been made or not
//
// Algorithm:
// - do iteration while swapPerformed is true
// - iterate from index 0 to index of length - 2
//   - if current index in array is greater than current + 1
//     - set swapPerformed = true
//     - swap the values

let bubbleSort = arr => {
  let swapPerformed;

  do {
    swapPerformed = false;

    for (let i = 0; i < arr.length - 1; i += 1) {
      if (arr[i] > arr[i + 1]) {
        swapPerformed = true;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  } while (swapPerformed);
};

 var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
