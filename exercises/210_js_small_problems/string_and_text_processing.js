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
// let lowerCaseCount = str => (str.match(/[a-z]/g) || []).length;

// let upperCaseCount = str => (str.match(/[A-Z]/g) || []).length;

// let neitherCaseCount = str => (str.match(/[^a-z]/gi) || []).length;

// let letterCaseCount = str => {
//   return {
//     lowercase: lowerCaseCount(str),
//     uppercase: upperCaseCount(str),
//     neither: neitherCaseCount(str),
//   }
// };

// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

// 4 Caitalize Words
// let wordCap = str => {
//   return str.split(' ').map(word => {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   }).join(' ');
// };

// console.log(wordCap('four score and seven'));       // "Four Score And Seven"
// console.log(wordCap('the javaScript language'));    // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'`

// 5 Swap Case
// let swapCase = str => {
//   return str.split('').map(char => {
//     let charCode = char.charCodeAt();
//     if (charCode >= 97 && charCode <= 122) {
//       return char.toUpperCase();
//     } else if (charCode >= 65 && charCode <= 90) {
//       return char.toLowerCase();
//     } else {
//       return char;
//     }
//   }).join('');
// };

// console.log(swapCase('CamelCase'));              // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

// 6 Staggered Caps Part 1
// let staggeredCase = str => {
//   return str.split('').map((char, index) => {
//     if (index % 2 === 0) {
//       return char.toUpperCase();
//     } else {
//       return char.toLowerCase();
//     }
//   }).join('');
// };

// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"

// 7 Staggered Caps Part 2
// let staggeredCase = str => {
//   let index = 0;

//   return str.split('').map(char => {
//     if (/[a-zA-Z]/.test(char)) {
//       if (index % 2 === 0) {
//         char = char.toUpperCase();
//       } else {
//         char = char.toLowerCase();
//       }

//       index += 1;
//     }

//     return char;
//   }).join('');
// };

// console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
// console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
// console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"

// 8 How Long Are You
// let wordLengths = str => {
//   if (str === undefined || str.length === 0) return [];

//   return str.split(' ').map(word => `${word} ${word.length}`);
// };

// console.log(wordLengths('cow sheep chicken'));
// // ["cow 3", "sheep 5", "chicken 7"]

// console.log(wordLengths('baseball hot dogs and apple pie'));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // ["Supercalifragilisticexpialidocious 34"]

// console.log(wordLengths(''));      // []
// console.log(wordLengths());        // []

// 9 Search Word Part 1
// let searchWord = (str, text) => {
//   let result = 0;

//   text.split(' ').forEach(word => {
//     if (word.toLowerCase() === str.toLowerCase()) {
//       result += 1;
//     }
//   });

//   return result;
// };

// var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// console.log(searchWord('sed', text));      // 3
// console.log(searchWord('qui', text));      // 4

// 10 Search Word Part 2
let searchWord = (str, text) => {
  return text.split(' ').map(word => {
    if (word.toLowerCase() === str.toLowerCase()) {
      return `**${word.toUpperCase()}**`;
    } else {
      return word;
    }
  }).join(' ');
};

var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
