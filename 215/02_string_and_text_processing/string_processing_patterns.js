// need to capitalize the first letter of every word in some text

let text = 'The quick brown fox jumps over the lazy dog.';

let capitalize = text => {
  let textArray = text.split(' ');

  let newTextArray = textArray.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  })

  return newTextArray.join(' ');
};

console.log(capitalize(text));

// count how often a specific word occurs in some text

let countWordInText = (word, text) => {
  let textArray = text.replace(/[^a-z ]/ig, '').split(' ');

  return textArray.filter(wordInText => {
    return word.toLowerCase() === wordInText.toLowerCase();
  }).length;
};

console.log(countWordInText('the', text));
console.log(countWordInText('dog', text));
