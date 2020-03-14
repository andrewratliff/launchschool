// 1 Cute Angles
// function dms(angle) {
//   const DEGREE_SYMBOL = "\xB0";
//   const MINUTES_PER_DEGREE = 60;
//   const SECONDS_PER_DEGREE = 3600;
//   let degrees = Math.floor(angle);
//   let minutes = Math.floor((angle - degrees) * MINUTES_PER_DEGREE);
//   let seconds = Math.floor((angle - degrees - minutes / MINUTES_PER_DEGREE) * SECONDS_PER_DEGREE);

//   degrees = formatMeasure(degrees, DEGREE_SYMBOL);
//   minutes = formatMeasure(minutes, "'");
//   seconds = formatMeasure(seconds, '"');

//   return degrees + minutes + seconds;
// }

// function formatMeasure(num, symbol) {
//   return String(num).padStart(2, '0') + symbol;
// }


// console.log(dms(30));           // 30°00'00"
// console.log(dms(76.73));        // 76°43'48"
// console.log(dms(254.6));        // 254°35'59"
// console.log(dms(93.034773));    // 93°02'05"
// console.log(dms(0));            // 0°00'00"
// console.log(dms(360));          // 360°00'00" or 0°00'00"

// 2 Combining Arrays
// function union(...args) {
//   let result = [];

//   args.forEach( arr => {
//     arr.forEach(element => {
//       if (!result.includes(element)) {
//         result.push(element);
//       }
//     });
//   });

//   return result;
// }

// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

// 3 Halvsies
// function halvsies(arr) {
//   let halfWay = Math.ceil(arr.length / 2);
//   let firstHalf = arr.slice(0, halfWay);
//   let secondHalf = arr.slice(halfWay);

//   return [firstHalf, secondHalf];
// }

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]

// 4 Find the Duplicate
function findDup(arr) {
  let sorted = arr.slice().sort();

  for (let i = 0; i < sorted.length; i += 1) {
    if (sorted[i] === sorted[i + 1]) {
      return sorted[i];
    }
  };
}

console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([
  18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
  85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
  40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
  7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73
