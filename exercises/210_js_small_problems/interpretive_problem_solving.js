// 01 1000 Lights
//
// Problem Description:
// You have a row of switches
// Starting at 1 you go down the row of switches and turn on the switch, if the
// position of that switch (not the index) is divisible by the iteration number
// Once you go through for each switch, filter the array for switches that are
// on
// Input: integer (number of switches)
// Output: array of numbers (the switches that are on)
//
// Data Structures:
// object with numbers 1 to n as the keys, starting values are false
//
// Algorithm:
// - create an array of N size with all values equal to false
// - loop from 1 to N
//   - iterate through the array
//     - if the index + 1 % counter === 0, ! the element
let createObject = count => {
  let result = {};

  for (let i = 1; i <= count; i += 1) {
    result[i] = false;
  }

  return result;
};

let lightsOn = switches => {
  let lights = createObject(switches);
  let result = [];

  for (let i = 1; i <= switches; i += 1) {
    Object.keys(lights).forEach(light => {
      if (light % i === 0) {
        lights[light] = !lights[light];
      }
    });
  }

  Object.keys(lights).forEach(light => {
    if (lights[light]) {
      result.push(Number(light));
    }
  })

  return result;
};

// Examples:
// console.log(lightsOn(5));   // [1, 4]
// console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// 02 Diamonds
// Write a function that displays a four-pointed diamond in an nxn grid, where
// n is an odd integer supplied as an argument to the function. You may assume
// that the argument will always be an odd integer.

// Understanding the Problem:
// input:
// what happens when the number is 0, negative, even?
//
// output:
// return a string delimited with \n characters?
// console.log directly from the function
//
// model the problem:
// given an odd number n, eg 5
// output n strings
//  - 1, 3, 5, 3, 1
//  - prepend the number of spaces 2, 1, 0, 1, 2
// join together with \n or loop and print

let diamond = num => {
  for(let i = 1; i < num; i += 2) {
    let spaces = ' '.repeat((num - i) / 2);
    let asterix = '*'.repeat(i);

    console.log(spaces + asterix + spaces);
  }

  for (let i = num; i >= 1; i -= 2) {
    let spaces = ' '.repeat((num - i) / 2);
    let asterix = '*'.repeat(i);

    console.log(spaces + asterix + spaces);
  }
};

// diamond(1);
// logs
// *

// diamond(3);
// logs
 // *
// ***
 // *

// diamond(9);
// logs
    // *
   // ***
  // *****
 // *******
// *********
 // *******
  // *****
   // ***
    // *

// 03 Now I Know My ABCs
// Problem Description:
// Given a list of blocks test to see if a given word is a block word
// A word is a block word if:
// - only one letter from a block appears in the word
// - each letter only appears once
//
// Data Structures:
// blocks: array of arrays [[a, b], [c, d]....]
// input: string
// output: bool
//
// Algorithm:
// - loop through the blocks
//   - if both letters in the block appear in the word -> return false
//   - if only one letter appears, make sure it doesn't appear more than once
// - if the loop doesn't return false, return true

const BLOCKS = [
  ['b', 'o'],
  ['x', 'k'],
  ['d', 'q'],
  ['c', 'p'],
  ['n', 'a'],
  ['g', 't'],
  ['r', 'e'],
  ['f', 's'],
  ['j', 'w'],
  ['h', 'u'],
  ['v', 'i'],
  ['l', 'y'],
  ['z', 'm'],
];

let includesBothLetters = (word, [first, second]) => {
  return word.includes(first) && word.includes(second);
};

let letterAppearsMoreThanOnce = (word, letter) => {
  return word.indexOf(letter) !== word.lastIndexOf(letter);
};

let isBlockWord = word => {
  word = word.toLowerCase();

  for (let i = 0; i < BLOCKS.length; i += 1) {
    if (
      includesBothLetters(word, BLOCKS[i])          ||
      letterAppearsMoreThanOnce(word, BLOCKS[i][0]) ||
      letterAppearsMoreThanOnce(word, BLOCKS[i][1])
    ) {
      return false;
    }
  }

  return true;
};

// console.log(isBlockWord('BATCH')=== true);
// console.log(isBlockWord('BUTCH') === false);
// console.log(isBlockWord('jest') === true);
// console.log(isBlockWord('jestj') === false);

// 04 Caesar Cipher
// Write a function that implements the Caesar Cipher. The Caesar Cipher is one
// of the earliest and simplest ways to encrypt plaintext so that a message can
// be transmitted securely. It is a substitution cipher in which each letter in
// a plaintext is substituted by the letter located a given number of positions
// away in the alphabet. For example, if the letter 'A' is right-shifted by 3
// positions, it will be substituted with the letter 'D'. This shift value is
// often referred to as the key. The "encrypted plaintext" (ciphertext) can be
// decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper
// case). Any other character is left as is. The substituted letters are in the
// same letter case as the original letter. If the key value for shifting
// exceeds the length of the alphabet, it wraps around from the beginning.
//
// Problem:
// Take each character in a string and transform it according to the cipher
// If the char is not a letter, do nothing. If the char is a letter, go up by
// the number of the cipher.
// If the end of the alphabet is reached, loop back around to the front.

// Data Structures:
// Input: string
// Output: string
//
// Algorithm:
// - transform the string into an array of characters
// - map through the characters
//   - if the character is not a letter -> return the character
//   - if the character is a letter
//     - get the charCode and add the cipher
//     - if the new charcode is > 90 and < 97
//       - new charcode = 60 + (charcode - 90)
//     - if the new charcode is > 122
//       - new charcode = 97 + (charcode - 122)
// return the result join('');

// let caesarEncrypt = (str, cipher) => {
//   result = str.split('').map(char => {
//     if (!(/[a-z]/i).test(char)) {
//       return char;
//     }

//     charCode = char.charCodeAt() + cipher;

//     if ((/[a-z]/).test(char) && charCode > 122) {
//       charCode = 97 + (charCode - 123);
//     } else if ((/[A-Z]/).test(char) && charCode > 90) {
//       charCode = 65 + (charCode - 91);
//     }

//     return String.fromCharCode(charCode);
//   });

//   return result.join('');
// };

// student submission:
let caesarEncrypt = (str, key) => {
  const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

  return str.replace(/[a-z]/gi, char => {
    const upcased = char.toUpperCase() === char;
    const newIdx = (ALPHA.indexOf(char.toLowerCase()) + key) % ALPHA.length;
    return upcased ? ALPHA[newIdx].toUpperCase() : ALPHA[newIdx];
  });
};

// Examples:
// simple shift
// console.log(caesarEncrypt('A', 0));       // "A"
// console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
// console.log(caesarEncrypt('y', 5));       // "d"
// console.log(caesarEncrypt('a', 47));      // "v"

// all letters
// console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
// console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
// console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
//

// 05 Vigenere Cipher
// Problem:
// Input: message (string), keyword (string)
// Output: string
//
// Take in a message and a keyword
// create a string of alpha characters using the index as the shift number
// create a keyword index starting at zero
// iterate through all the chars in the message
//   - if the char is a letter
//     - do the cipher
//     - update the keyword index
//     - if the keyword index is equal to the keywork length, reset to zero
//
// Examples:
// plaintext: Pineapples don't go on pizzas!
// keyword: meat

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!
//
// Data Structures:
// result can be a built up string
//
// Algorithm:
// - message.split('').forEach(char
//   - if char is not a letter -> add it to the result string
//   - else
//     - perform the cipher
//       - newIdx = index of char + index of keyword[keyword_index] % message.lengh
//       - add alpha[newIdx] to the result
//       - increment keyword_index
//       - if keyword_index === keyword.length -> keyword index = 0;
// - return result string
//

let cipher = (char, cipher_char) => {
  const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
  const char_idx = ALPHA.indexOf(char.toLowerCase());
  const cipher_idx = ALPHA.indexOf(cipher_char.toLowerCase());
  const newIdx = (char_idx + cipher_idx) % ALPHA.length;

  if (ALPHA[char_idx] === char) {
    return ALPHA[newIdx];
  }

  return ALPHA[newIdx].toUpperCase();
};

let vigenere = (message, keyword) => {
  let result = '';
  let keyword_index = 0;

  message.split('').forEach(char => {
    if ((/[^a-z]/i).test(char)) {
      result += char;
    } else {
      result += cipher(char, keyword[keyword_index]);
      keyword_index += 1;

      if (keyword_index === keyword.length) keyword_index = 0;
    }
  });

  return result;
};

// console.log(vigenere("Pineapples don't go on pizzas!", 'meat')); // result: Bmnxmtpeqw dhz'x gh ar pbldal!
// console.log(vigenere("Pineapples don't go on pizzas!", 'Aa')); // result: Bmnxmtpeqw dhz'x gh ar pbldal!

// 06 Seeing Stars
//
// Problem:
// Write a function that displays an 8-pointed star in an nxn grid, where n is
// an odd integer that is supplied as an argument to the function. The smallest
// such star you need to handle is a 7x7 grid (i.e., when n is 7).
//
// Input: odd integer
// Output: print star to screen
//
// Indexes where we want to print stars:
// first: 0
// middle: Math.ceil(num / 2)
// last: num - 1
//
// print the top half
// iterate from 0 to Math.floor(num / 2)
// put a star at first, middle, and last indexs
// increment first index by 1
// decrement last index by 1
//
// print middle -> num stars
//
// print the bottom half
// iterate from first to zero
// put stars are first middle last
// decrement first
// increment last
//
// Data Structures:
// Array of num arrays.. each array is an array of spaces to start
//
// Algorithm:
// arrays = [[' ', ' ', ' '], [] ...]
// first = 0
// middle = Math.ceil(num / 2);
// last = num - 1;
//
// loop from 0 to middle - 1
//   array[first] = '*'
//   array[middle] = '*'
//   array[last] = '*'
//
//   first += 1;
//   last -= 1;
//
// arrays[middle].map('*')
//
// loop from middle - 1 to 0
//   array[first] = '*'
//   array[middle] = '*'
//   array[last] = '*'
//
//   first -= 1
//   last += 1

let star = num => {
  let arrays = [...Array(num)].map(() => [...Array(num)].map(() => ' '))
  let first = 0;
  let middle = (num - 1) / 2;
  let last = num - 1;

  for (let i = 0; i < middle; i += 1) {
    arrays[i][first] = '*';
    arrays[i][middle] = '*';
    arrays[i][last] = '*';

    first += 1;
    last -= 1;
  }

  arrays[middle] = arrays[middle].map(() => '*');

  for (let i = middle; i < num; i += 1) {
    arrays[i][first] = '*';
    arrays[i][middle] = '*';
    arrays[i][last] = '*';

    first -= 1;
    last += 1;
  }

  arrays.forEach(arr => console.log(arr.join('')));
};
// Examples:
// 0 3 6
// 1 3 5
// 2 3 4
//
// 2 3 4
// 1 3 5
// 0 3 6
//
// 1 4 7
// 2 4 6
// 3 4 5
//
// 3 4 5
// 2 4 6
// 1 4 7

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *
