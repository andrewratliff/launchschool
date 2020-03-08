// 1
function oddElementsOf(arr) {
  let oddElements = [];

  for (let i = 1; i < arr.length; i += 2) {
    oddElements.push(arr[i]);
  };

  return oddElements;
}

// var digits = [4, 8, 15, 16, 23, 42];
// console.log(oddElementsOf(digits));    // returns [8, 16, 42]

// 2
function combinedArray(even, odd) {
  let result = [];

  for (let i = 0; i < even.length; i += 1) {
    result.push(even[i], odd[i]);
  };

  return result;
}

// var digits = [4, 8, 15, 16, 23, 42];
// var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

// console.log(combinedArray(digits, letters));  // returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]

// 3
function concatReversed(arr) {
  let result = arr.slice();

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    result.push(arr[i]);
  };

  return result;
}

function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

// console.log(concatReversed(['a', 'b', 'c', 'd']));
// console.log(mirroredArray(['a', 'b', 'c', 'd']));

// 4
function sortDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}

// var array = [23, 4, 16, 42, 8, 15];
// var result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

// 5
// function matrixSums(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     result.push(arr[i].reduce((memo, element) => memo += element, 0));
//   };

//   console.log(result);
// }

// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

// 6
function uniqueElements(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  };

  return result;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]
