// function average(a, b, c) {
//   return sum(a, b, c) / 3;
// }

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(average(10, 20, 30));

function average(numbers) {
   return sum(numbers) / numbers.length;
}

function sum(numbers) {
  return numbers.reduce((total, num) => total += num, 0);
}

console.log(average([10, 20, 30]));

let temperatues = [98, 99, 89, 104, 92];

console.log(average(temperatues));
