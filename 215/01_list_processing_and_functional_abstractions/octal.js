const BASE = 8;

// let octalToDecimal = octalStr => {
//   let digits = octalStr.split('').map((num, index, array) => {
//     return Number(num) * (Math.pow(BASE, array.length - index - 1));
//   });

//   return digits.reduce((sum, digit) => sum + digit);
// };

let octalToDecimal = octalStr => {
  return octalStr.split('').reduce((sum, digitChar, index) => {
    return sum + Number(digitChar) * Math.pow(BASE, octalStr.length - index - 1);
  }, 0);
};


console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
