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
function getSelectedColumns(numbers, cols) {
  var result = [];

  // numbers [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  // cols    [0]

  for (var i = 0, length = numbers.length; i < length; i += 1) {
    for (var j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// given the following arrays of number arrays
var array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

console.log(getSelectedColumns(array1, [0]));     // [[1]];            expected: [[1, 4, 7]]
console.log(getSelectedColumns(array1, [0, 2]));  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
console.log(getSelectedColumns(array2, [1, 2]));  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]
