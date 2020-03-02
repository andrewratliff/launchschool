// let removeNonInteger = (array) => {
//   return array.filter(element => {
//     return Number.isInteger(element);
//   });
// };

// let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let newArray = removeNonInteger(array);
// console.log(newArray); // => [1, 3, -4]

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// function oddLengths(arr) {
//   let lengths = arr.map(element => element.length);

//   return lengths.filter(length => length % 2 !== 0)
// }

// console.log(oddLengths(arr)); // => [1, 5, 3]

// let numbers = [3, 5, 7];

// function sumOfSquares(numbers) {
//   return numbers.reduce((acc, val) => acc + (val * val), 0);
// }

// console.log(sumOfSquares(numbers));

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// let oddLengths = (arr) => {
//   return arr.reduce((accumulator, str) => {
//     let length = str.length;
//     if (length % 2 !== 0) {
//       accumulator.push(length);
//     }

//     return accumulator;
//   }, []);
// }

// console.log(oddLengths(arr));

// let numbers1 = [1, 3, 5, 7, 9, 11];
// let numbers2 = [];
// let numbers3 = [2, 4, 6, 8];

// console.log(numbers1.includes(3));
// console.log(numbers2.includes(3));
// console.log(numbers3.includes(3));

let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];

console.log(arr[1][2]);
