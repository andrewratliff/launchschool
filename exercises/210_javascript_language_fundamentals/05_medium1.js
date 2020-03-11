// 1 logical operation
// (false && undefined);
// (false || undefined);
// ((false && undefined) || (false || undefined));
// ((false || undefined) || (false && undefined));
// ((false && undefined) && (false || undefined));
// ((false || undefined) && (false && undefined));
// ('a' || (false && undefined) || '');
// ((false && undefined) || 'a' || '');
// ('a' && (false || undefined) && '');
// ((false || undefined) && 'a' && '');

// false
// undefined
// undefined
// false
// false
// undefined
// 'a'
// 'a'
// undefined
// undefined

// 2 conditional loop
// var i = 0;
// while (i < 10) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }

//   i += 1;
// }

// 3 multiplication table
// var row;
// var i;
// var j;

// function padLeft(number) {
//   var stringNumber = String(number);
//   return stringNumber.length <= 1 ? ' ' + stringNumber : stringNumber;
// }

// for (i = 1; i < 10; i += 1) {
//   row = '';
//   for (j = 1; j <= 10; j += 1) {
//     row += padLeft(i * j) + ' ';
//   }

//   console.log(row + '\n');
// }

// 4 selected columns
// function getSelectedColumns(numbers, cols) {
//   var result = [];

//   // numbers [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//   // cols    [0]

//   for (var i = 0; i < numbers.length; i += 1) {
//     for (var j = 0; j < cols.length; j += 1) {
//       if (!result[j]) {
//         result[j] = [];
//       }

//       result[j][i] = numbers[i][cols[j]];
//     }
//   }

//   return result;
// }

// // given the following arrays of number arrays
// var array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// var array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// // `array1` in row/column format
// // [[1, 2, 3],
// //  [4, 5, 6],
// //  [7, 8, 9]]

// console.log(getSelectedColumns(array1, [0]));     // [[1]];            expected: [[1, 4, 7]]
// console.log(getSelectedColumns(array1, [0, 2]));  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
// console.log(getSelectedColumns(array2, [1, 2]));  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]

// 5 counter
// snippet 1
// var counter = 5;
// var rate = 3;
// console.log('The total value is ' + String(counter * rate));

// function counter(count) {
//   // ...
// }

// // snippet 2
// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

// var counter = 5;
// var rate = 3;

// // snippet 2
// var counter = 5;
// var rate = 3;

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

// 6 logger
// function debugIt() {
//   var status = 'debugging';
//   function logger() {
//     console.log(status);
//   }

//   logger();
// }

// debugIt();

// 7 invoice
// function invoiceTotal(amount1, amount2, amount3, amount4) {
//   return amount1 + amount2 + amount3 + amount4;
// }

// function invoiceTotal(...args) {
//   return args.reduce((sum, amount) => sum += amount, 0);
// }

// console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
// console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?

// 8 product of sums
// function productOfSums(array1, array2) {
//   var result;
//   result = total(array1) * total(array2);
//   return result;
// }

// function total(numbers) {
//   var sum = 0;
//   var i;

//   for (i = 0; i < numbers.length; i += 1) {
//     sum += numbers[i];
//   }

//   return sum;
// }
