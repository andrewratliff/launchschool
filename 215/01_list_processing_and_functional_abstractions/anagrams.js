let anagram = (word, list) => {
  return list.filter(otherWord => isAnagram(word, otherWord));
}

let isAnagram = (word, otherWord) => {
  return word.split('').sort().join('') === otherWord.split('').sort().join('')
};

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
