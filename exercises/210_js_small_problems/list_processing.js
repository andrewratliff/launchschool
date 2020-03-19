// 1 Sum of Digits
// let sum = number => {
//   return String(number).
//     split('').
//     reduce((sum, num) => sum + parseInt(num, 10), 0);
// }

// from juliette Sinibardy
// let sum = num => [...String(num)].reduce((sum, n) => sum + parseInt(n, 10), 0);

// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45

// 2 Alphabetical Numbers
// let getAlphaNumber = number => {
//   return [
//     'zero',
//     'one',
//     'two',
//     'three',
//     'four',
//     'five',
//     'six',
//     'seven',
//     'eight',
//     'nine',
//     'ten',
//     'eleven',
//     'twelve',
//     'thirteen',
//     'fourteen',
//     'fifteen',
//     'sixteen',
//     'seventeen',
//     'eighteen',
//     'nineteen',
//   ][number]
// };

// let compareAlphaNumbers = (num1, num2) => {
//   if (getAlphaNumber(num1) < getAlphaNumber(num2)) {
//     return -1;
//   } else if (getAlphaNumber(num1) > getAlphaNumber(num2)) {
//     return 1;
//   } else {
//     return 0;
//   }
// };

// let alphabeticNumberSort = arr => arr.sort(compareAlphaNumbers);

// console.log(alphabeticNumberSort(
//    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// 3 Multiply All Pairs
// let multiplyAllPairs = (arr1, arr2) => {
//   return arr1.reduce((result, num) => {
//     arr2.forEach(n => result.push(num * n));
//     return result;
//   }, []).sort((a, b) => a - b);
// };

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

// 4 Sum of Sums
// let sumOfSums = arr => {
//   return arr.reduce((sum, num, index, array) => {
//     return sum + num + array.slice(0, index).reduce((s, n) => s + n);
//   });
// };

// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

// 5 Leading Substrings
let substringsAtStart = str => {
  return [...str].map((letter, index, array) => {
    return array.slice(0, index).join('') + letter;
  })
};

// console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
// console.log(substringsAtStart('a'));        // ["a"]
// console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// 6 All Substrings
let substrings = str => {
  return [...str].map((letter, index, array) => {
    return substringsAtStart(array.slice(index, array.length));
  }).reduce((result, array) => result.concat(array));
};

// console.log(substrings('abcde'));

// 7 Palindromic Substrings
// let isPalindrome = str => {
//   return str.length > 1 && str === str.split('').reverse().join('');
// }
// let palindromes = str => substrings(str).filter(isPalindrome);



// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]
// console.log(palindromes('hello-madam-did-madam-goodbye'));
// console.log(palindromes('knitting cassettes'));

// 8 Grocery List
// let buyFruit = array => {
//   return array.reduce((result, [item, quantity]) => {
//     for (let i = 0; i < quantity; i += 1) {
//       result.push(item);
//     }

//     return result;
//   }, []);
// };

// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));

// 9 Inventory Item Transactions
let transactionsFor = (id, array) => {
  return array.filter(transaction => transaction.id === id);
};

var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

// 10 Inventory Item Availability
let itemsLeft = transactions => {
  return transactions.reduce((totalQuantity, transaction) => {
    let movement = transaction.movement;
    let quantity = transaction.quantity;

    return totalQuantity + (movement === 'out' ? -quantity : quantity);
  }, 0);
};
let isItemAvailable = (id, transactions) => itemsLeft(transactionsFor(id, transactions)) > 0;


console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
