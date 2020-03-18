// let count = [1, 2, 3, 4, 5];
// let filtered = count.filter((number, index, array) => number % 2 === 0);
// console.log(filtered);

// let myFilter = (array, func) => {
//   let result = [];

//   array.forEach(element => {
//     if (func(element)) {
//       result.push(element);
//     }
//   });

//   return result;
// };

// let isPythagoreanTriple = triple => {
//   return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
// };

// let array = [
//   { a: 3, b: 4, c: 5 },
//   { a: 5, b: 12, c: 13 },
//   { a: 1, b: 2, c: 3 },
// ];

// console.log(myFilter(array, isPythagoreanTriple));


let multiplesOfThreeOrFive = values => {
  return values.filter(isMultipleOfThreeOrFive);
};

let isMultipleOfThreeOrFive = value => {
  return value % 5 === 0 || value % 3 === 0;
};

let array = [1, 3, 5, 7, 11, 18, 16, 15];

console.log(multiplesOfThreeOrFive(array));
