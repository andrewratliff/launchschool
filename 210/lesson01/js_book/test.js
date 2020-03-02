// let foo = 'bar';

// if (true) {
//   console.log(foo);
// }

// console.log(foo);

// {
//   console.log(foo);
//   let foo = 'quix';
//   console.log(foo);
// };

// console.log(foo);

// let factorial = (num) => {
//   let total = 1;

//   for (let i = num; i >= 1; i -= 1) {
//     total *= i;
//   }

//   return total;
// };

// console.log(factorial(5));
// console.log(factorial(8));

// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let tries = 0;
// let result;

// do {
//   tries += 1;
//   result = randomNumberBetween(1, 6);
// } while (result <= 2)

// console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// let factorial = (num) => {
//   if (num <= 1) return 1;
//   return num * (factorial(num - 1));
// };

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(5));
// console.log(factorial(8));

// let array = [1, 2, 3];
// array.forEach((num) => {
//   console.log(num);
// });

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

let allMatches = (words, regex) => {
  return words.filter(word => regex.test(word));
};

console.log(allMatches(words, /lab/)); // ['laboratory', 'flab', 'elaborate']
