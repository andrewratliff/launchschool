let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

let firstLetters = names.map(name => name.charAt(0));

let letterCounts = firstLetters.reduce((obj, letter) => {
  obj[letter] = obj[letter] || 0;
  obj[letter] += 1;

  return obj;
}, {});

let letter = Object.keys(letterCounts).reduce((lastLetter, currentLetter) => {
  if (letterCounts[lastLetter] > letterCounts[currentLetter]) {
    return lastLetter;
  } else {
    return currentLetter;
  }
});

console.log(letter);
