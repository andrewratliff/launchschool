// let add = (previousValue, element) => {
//   let sum = previousValue + element;
//   console.log(previousValue, element, sum);
//   return sum;
// };

// let count = [1, 2, 3, 4, 5];
// console.log(count.reduce(add, 0));

// let myReduce = (array, func, initial) => {
//   let accmulator = initial;
//   let index = 0;

//   if (initial === undefined) {
//     accmulator = array[0];
//     index = 1;
//   }

//   array.slice(index).forEach(element => {
//     accmulator = func(accmulator, element);
//   });

//   return accmulator;
// };

// let smallest = (result, value) => (result <= value ? result : value);
// let sum = (result, value) => result + value;

// let array = [5, 12, 15, 1, 6];

// console.log(myReduce(array, smallest)); // 1
// console.log(myReduce(array, sum, 10)); //49

let longestWord = words => words.reduce(longest);

let longest = (result, currentWord) => {
  return currentWord.length >= result.length ? currentWord : result;
};

console.log(longestWord(['abc', 'launch', 'targets', '']));
