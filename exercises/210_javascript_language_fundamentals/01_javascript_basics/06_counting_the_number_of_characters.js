let rlSync = require('readline-sync');

let phrase = rlSync.question('Please enter a phrase: ');
let alphaPhrase = phrase.replace(/[^a-zA-Z]/g, '');

console.log(`There are ${alphaPhrase.length} characters in "${alphaPhrase}".`);
