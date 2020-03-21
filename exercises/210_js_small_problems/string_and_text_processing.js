// 1 Uppercase Check
// let isUppercase = str => {
//   return !(/[a-z]/).test(str);
// }

// console.log(isUppercase('t'));               // false
// console.log(isUppercase('T'));               // true
// console.log(isUppercase('Four Score'));      // false
// console.log(isUppercase('FOUR SCORE'));      // true
// console.log(isUppercase('4SCORE!'));         // true
// console.log(isUppercase(''));                // true

// 2 Delete Vowels
// let removeVowels = arr => {
//   return arr.map(str => str.replace(/[aeiou]/ig, ''));
// };

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

// 3 Lettercase Counter
let lowerCaseCount = str => (str.match(/[a-z]/g) || []).length;

let upperCaseCount = str => (str.match(/[A-Z]/g) || []).length;

let neitherCaseCount = str => (str.match(/[^a-z]/gi) || []).length;

let letterCaseCount = str => {
  return {
    lowercase: lowerCaseCount(str),
    uppercase: upperCaseCount(str),
    neither: neitherCaseCount(str),
  }
};

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
