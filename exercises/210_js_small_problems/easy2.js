// ddaaiillyy ddoouubbllee
// function crunch(str) {
//   let result = '';

//   for(let i = 0; i < str.length; i += 1) {
//     let currentVal = str[i];
//     let nextVal = str[i + 1];

//     if (nextVal !== currentVal) {
//       result += currentVal;
//     }
//   };

//   console.log(result);
// }

// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// bannerizer
// function logInBox(str) {
//   let length = str.length;

//   console.log(`+-${'-'.repeat(length)}-+`);
//   console.log(`| ${' '.repeat(length)} |`);
//   console.log(`| ${str} |`);
//   console.log(`| ${' '.repeat(length)} |`);
//   console.log(`+-${'-'.repeat(length)}-+`);
// }

// logInBox('To boldly go where no one has gone before.');
// logInBox('');

// stringy strings
// function stringy(num) {
//   let result = '';

//   for (let i = 1; i <= num; i += 1) {
//     if (i % 2 === 0) {
//       result += '0';
//     } else {
//       result += '1';
//     }
//   };

//   console.log(result);
// }

// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

// fibonacci number location by length
// function findFibonacciIndexByLength(length) {
//   let lastVal = 1;
//   let currentVal = 1;
//   let index = 2;

//   while(currentVal.toString().length < length) {
//     let temp = currentVal;
//     currentVal += lastVal;
//     lastVal = temp;
//     index += 1;
//   };

//   console.log(index);
// }

// findFibonacciIndexByLength(2);       // 7
// findFibonacciIndexByLength(10);      // 45
// findFibonacciIndexByLength(16);      // 74

// right triangles
// function triangle(num) {
//   for (let i = 0; i <= num; i += 1) {
//     let spaces = num - i;

//     console.log(' '.repeat(spaces) + '*'.repeat(i));
//   }
// }

// triangle(9);

// madlibs
// let noun = prompt('Enter a noun:');
// let verb = prompt('Enter a verb:');
// let adjective = prompt('Enter a adjective:');
// let adverb = prompt('Enter a adverb:');

// console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);

// double doubles
// function twice(num) {
//   if (isDoubleNumber(num)) {
//     console.log(num);
//   } else {
//     console.log(num * 2);
//   }
// }

// function isDoubleNumber(num) {
//   let stringNum = (num).toString();
//   let halfIndex = stringNum.length / 2;

//   return (stringNum.slice(0, halfIndex) === stringNum.slice(halfIndex));
// }

// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676

// grade book
// function percentToLetter(percent) {
//   let letter;

//   if (percent >= 90) {
//     letter = 'A';
//   } else if (percent >= 80) {
//     letter = 'B';
//   } else if (percent >= 70) {
//     letter = 'C';
//   } else if (percent >= 60) {
//     letter = 'D';
//   } else {
//     letter = 'F';
//   }

//   return letter;
// }

// function getGrade(grades) {
//   let total = grades.reduce((memo, grade) => memo += grade, 0);
//   let percent = total / grades.length;

//   console.log(percentToLetter(percent));
// }

// getGrade([95, 90, 93]);    // "A"
// getGrade([50, 50, 95]);    // "D"

// clean up the words
// function cleanUp(str) {
//   let result = '';

//   for (let i = 0; i < str.length; i += 1) {
//     if ((/[a-zA-Z]/).test(str[i])) {
//       result += str[i];
//     } else if (!((/[a-zA-Z]/).test(str[i - 1]))) {
//       continue;
//     } else {
//       result += ' ';
//     }
//   };

//   console.log(result);
// }

// cleanUp("---what's my +*& line?");    // " what s my line "

// what century is that
function century(year) {
  let century = Math.floor(year / 100)

  if (year % 10 !== 0) {
    century += 1;
  }

  console.log(centuryToString(century));
}

function centuryToString(century) {
  let onesPlace = century % 10;
  let tensPlace = century % 100;

  if(onesPlace === 1 && tensPlace !== 11) {
    return century + 'st';
  } else if (onesPlace === 2 && tensPlace !== 12) {
    return century + 'nd';
  } else if (onesPlace === 3 && tensPlace !== 13) {
    return century + 'rd';
  } else {
    return century + 'th';
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
