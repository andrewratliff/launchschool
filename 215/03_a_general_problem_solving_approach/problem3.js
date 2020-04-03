// Problem:
// A collection of spelling blocks has two letters per block, as shown in this
// list:
//
// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
//
// This limits the words you can spell with the blocks to only those words that
// do not use both betters from any given block. You can also only use each
// block once.
//
// Write a function that takes a word string as an argument, and returns `true`
// if the word can be spelled using the set of blocks, or `false` otherwise. You
// can consider the letters to be case-insensitive when you apply the rules.
//
// Input: word string
// Output: boolean
//
// Data Structures:
// - block as an array of 2 element arrays [['b', 'o'], ['x', 'k']...]
// -
//
// Algorithm:
// - iterate through each block
//   - if the word contains both letters in the block, return false
//   - iterate through the letters of the block
//     - if the word contains the letter and indexOf(letter) !== lastIndexOf(letter) return false
//   - move to the next block
// - return true

const BLOCKS = [
  ['B', 'O'],
  ['X', 'K'],
  ['D', 'Q'],
  ['C', 'P'],
  ['N', 'A'],
  ['G', 'T'],
  ['R', 'E'],
  ['F', 'S'],
  ['J', 'W'],
  ['H', 'U'],
  ['V', 'I'],
  ['L', 'Y'],
  ['Z', 'M'],
];

let includesBoth = (word, firstLetter, secondLetter) => {
  return word.includes(firstLetter) && word.includes(secondLetter)
};

let includesMultiples = (word, letter) => {
  return word.indexOf(letter) !== word.lastIndexOf(letter);
};

let isBlockWord = word => {
  word = word.toUpperCase();

  for (let i = 0; i < BLOCKS.length; i += 1) {
    firstLetter = BLOCKS[i][0];
    secondLetter = BLOCKS[i][1];

    if (
      includesBoth(word, firstLetter, secondLetter) ||
      includesMultiples(word, firstLetter)          ||
      includesMultiples(word, secondLetter)
    ) {
      return false;
    }
  }

  return true;
};

// Examples:

console.log(true === isBlockWord('BATCH'));
console.log(false === isBlockWord('BUTCH'));
console.log(true === isBlockWord('jest'));
console.log(false === isBlockWord('jestj'));
