// 1 How Old is Teddy
// let age = Math.floor(Math.random() * (200 - 20 + 1)) + 20;

// console.log(`Teddy is ${age} years old!`);

// 2 Searching 101
// let nums = []

// nums.push(prompt('Enter the 1st number:'));
// nums.push(prompt('Enter the 2nd number:'));
// nums.push(prompt('Enter the 3rd number:'));
// nums.push(prompt('Enter the 4th number:'));
// nums.push(prompt('Enter the 5th number:'));

// let last = prompt('Enter the last number:');

// // if (nums.includes(last)) {
// //   console.log(`The number ${last} appears in ${nums}`);
// // } else {
// //   console.log(`The number ${last} does not appear in [${nums.join(', ')}].`);
// // }

// // further exploration
// if (nums.some(num => num > last)) {
//   console.log(`[${nums.join(', ')}] includes values greater than ${last}`);
// } else {
//   console.log(`The number ${last} is bigger than all values in [${nums.join(', ')}].`);
// }

// 3 When Will I Retire
// const age = parseInt(prompt('What is your age?'), 10);
// const retireAge = parseInt(prompt('At what age would you like to retire?'), 10);
// const currentYear = (new Date()).getFullYear();
// const yearsToGo = retireAge - age;

// console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsToGo}.`);
// console.log(`You have only ${yearsToGo} of work to go!`);

// 4 Palindromic Strings Part 1
// function isPalindrome(str) {
//   let arr = str.split('');
//   let reversed = arr.slice().reverse();

//   for (let i = 0; i < str.length; i += 1) {
//     if (arr[i] !== reversed[i]) {
//       return false;
//     }
//   };

//   return true;
// }

// // LS solution
// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true

// 5 Palindromic Strings Part 2
// function isRealPalindrome(str) {
//   let cleanStr = str.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
//   return cleanStr === cleanStr.split('').reverse().join('');
// }

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false

// 6 Palindromic Number
// function isPalindromicNumber(num) {
//   let str = String(num);
//   return str === str.split('').reverse().join('');
// }

// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true

// 7 Running Totals
// function runningTotal(arr) {
//   let total = 0;

//   return arr.map(el => total += el);
// }

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []

// 8 Letter Swap
// function swap(str) {
//   let words = str.split(' ');

//   words = words.map(word => {
//     let letters = word.split('');
//     letters[0] = word.charAt(letters.length - 1);
//     letters[letters.length - 1] = word.charAt(0);

//     return letters.join('');
//   });

//   return words.join(' ');
// }

// console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde'));                          // "ebcdA"
// console.log(swap('a'));                              // "a"

// 9 Letter Counter Part 1
// function wordSizes(str) {
//   if (!str) return {};
//   let result = {}
//   const words = str.split(' ');

//   for (let i = 0; i < words.length; i += 1) {
//     let length = String(words[i].length);

//     if (Object.keys(result).includes(length)) {
//       result[length] += 1;
//     } else {
//       result[length] = 1;
//     }
//   };

//   return result;
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));                                            // {}

// Letter Counter Part 2
function wordSizes(str) {
  if (!str) return {};
  let result = {}
  const words = str.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    let length = String(words[i].replace(/[^a-zA-Z]/g, '').length);

    if (Object.keys(result).includes(length)) {
      result[length] += 1;
    } else {
      result[length] = 1;
    }
  };

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
