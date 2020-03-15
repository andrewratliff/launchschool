// 1 Double Char Part 1
// function repeater(str) {
//   let result = [];

//   for (let i = 0; i < str.length; i += 1) {
//     result.push(str.charAt(i), str.charAt(i));
//   };

//   return result.join('');
// }

// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""

// 2 Double Char Part 2
// function doubleConsonants(str) {
//   let result = [];
//   const CONSONANTS_REGEX = new RegExp('[b-df-hj-np-tv-z]', 'i');

//   for (let i = 0; i < str.length; i += 1) {
//     if (CONSONANTS_REGEX.test(str.charAt(i))) {
//       result.push(str.charAt(i), str.charAt(i));
//     } else {
//       result.push(str.charAt(i));
//     }
//   };

//   return result.join('');
// }

// console.log(doubleConsonants('String'));          // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
// console.log(doubleConsonants(''));                // ""

// 3 Reverse Number
// function reverseNumber(num) {
//   return parseInt(String(num).split('').reverse().join(''), 10);
// }

// console.log(reverseNumber(12345));    // 54321
// console.log(reverseNumber(12213));    // 31221
// console.log(reverseNumber(456));      // 654
// console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
// console.log(reverseNumber(1));        // 1

// 4 Get the Middle Character
// function centerOf(str) {
//   let middle = str.length / 2;

//   if (Number.isInteger(middle)) {
//     return str.charAt(middle - 1) + str.charAt(middle);
//   } else {
//     return str.charAt(Math.floor(middle));
//   }
// }

// console.log(centerOf('I Love JavaScript')); // "a"
// console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs"
// console.log(centerOf('x'));                 // "x"

// 5 Always Return Negative
// function negative(num) {
//   return num > 0 ? num * -1 : num;
// }

// console.log(negative(5));     // -5
// console.log(negative(-3));    // -3
// console.log(negative(0));     // -0

// 6 Counting Up
// function sequence(num) {
//   let result = [];

//   for (let i = 1; i <= num; i += 1) {
//     result.push(i);
//   };

//   return result;
// }

// console.log(sequence(5));    // [1, 2, 3, 4, 5]
// console.log(sequence(3));    // [1, 2, 3]
// console.log(sequence(1));    // [1]

// 7 Name Swapping
// function swapName(str) {
//   let names = str.split(' ');

//   return names[names.length - 1] + ', ' + names.slice(0, names.length - 1).join(' ');
// }

// console.log(swapName('Joe Benny Roberts'));    // "Roberts, Joe"

// 8 Sequence Count
// function sequence(count, start) {
//   if (count === 0) return [];

//   let result = [];

//   for (let i = 1; i <= count; i += 1) {
//     result.push(start * i);
//   };

//   return result;
// }

// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []

// 9 Reverse It Part 1
// function reverseSentence(str) {
//   return str.split(' ').reverse().join(' ');
// }

// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

// 10 Reverse It Part 2
function reverseWords(str) {
  let result = str.split(' ');

  result = result.map(word => {
    return word.length >= 5 ? word.split('').reverse().join('') : word;
  });

  return result.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
