function repeatedCharacters(str) {
  let chars = str.toLowerCase().split('');
  let letterCounts = {}

  chars.forEach(char => {
    if (Object.keys(letterCounts).includes(char)) {
      letterCounts[char] += 1;
    } else {
      letterCounts[char] = 1;
    }
  });

  for(letter in letterCounts) {
    if (letterCounts[letter] <= 1) {
      delete letterCounts[letter];
    }
  };

  return letterCounts;
}



console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
