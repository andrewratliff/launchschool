let myOwnEvery = (array, func) => {
  for (let i = 0; i < array.length; i += 1) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
};

// let isAString = value => typeof value === 'string';
// console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));

let areAllNumbers = array => array.every(isANumber);
let isANumber = value => typeof value === 'number' && !Number.isNaN(value);

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false
