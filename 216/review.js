let rollCall = firstNames => {
  for (let i = 0; i < firstNames.length; i += 1) {
    console.log(firstNames[i]);
  }
};

let foo = args => {
  result = [];

  for (let i = args.length - 1; i >= 0; i -= 1) {
    result.push(args[i]);
  }

  return result;
};

let finalIndex = (arr, value) => {
  let index = -1;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === value) {
      index = i;
      break;
    }
  }

  return index;
};

let toStr = arr => {
  let result = '';
  for (let i = 0; i < arr.length; i += 1) {
    result += String(arr[i]);
  }

  return result;
};

let push = (arr, value) => {
  arr[arr.length] = value;
  return arr.length;
};

let pop = arr => {
  let result = arr[arr.length - 1];
  arr.length = arr.length - 1;

  return result;
};

let unshift = (arr, value) => {
  for (let i = arr.length; i >= 0; i -= 1) {
    arr[i] = arr[i - 1];
  }

  arr[0] = value;

  return arr.length;
};

let shift = arr => {
  let first = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;

  return first;
};

let indexOf = (arr, value) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
};

let lastIndexOf = (arr, value) => {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
};

let slice = (arr, start, end) => {
  let result = [];

  for (let i = start; i < end; i += 1) {
    result.push(arr[i]);
  }

  return result;
};

let splice = (arr, start, num) => {
  let removed = [];

  for (let i = start; i < start + num; i += 1) {
    if (i < start + num) {
      removed.push(arr[i]);
    }

    arr[i] = arr[i + num]
  }

  arr.length = arr.length - num;

  return removed;
};

let concat = (arr1, arr2) => {
  let result = []

  for(let i = 0; i < arr1.length; i += 1) {
    result.push(arr1[i]);
  }

  for(let i = 0; i < arr2.length; i += 1) {
    result.push(arr2[i]);
  }

  return result;
};

let join = (arr, separator) => {
  let result = '';

  for (let i = 0; i < arr.length; i += 1) {
    result += String(arr[i]);

    if (i < arr.length - 1) {
      result += separator;
    }
  }

  return result;
};

let arraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

let lastNOf = (arr, count) => {
  if (arr.length < count) {
    return arr.slice();
  }

  return arr.slice(arr.length - count);
};

let endsOf = (beginningArr, endingArr) => {
  return beginningArr.slice(0, 1).concat(endingArr.slice(-1));
};

let oddElementsOf = arr => {
  return arr.filter((_, index) => index % 2 !== 0)
};

let combindedArray = (even, odd) => {
  let result = [];

  for (let i = 0; i < even.length; i += 1) {
    result.push(even[i]);
    result.push(odd[i]);
  };

  return result;
};

let weirdOne = arr => {
  return arr.concat(arr.slice().reverse());
};

let sortDescending = arr => {
  return arr.slice().sort((a, b) => a < b);
};

let matrixSums = arrays => {
  return arrays.map(arr => arr.reduce((sum, value) => sum += value, 0));
};

let uniqueElements = arr => {
  return new Set(arr);
};

let missing = arr => {
  let result = []

  for (let i = arr[0] + 1; i < arr[arr.length - 1]; i += 1) {
    if (!arr.includes(i)) {
      result.push(i);
    }
  }

  return result;
};

let objectHasProperty = (obj, str) => {
  if (Object.keys(obj).includes(str)) {
    return true;
  }

  return false;
};

// var pets = {
//   cat: 'Simon',
//   dog: 'Dwarf',
//   mice: null,
// };

// console.log(objectHasProperty(pets, 'dog'));       // true
// console.log(objectHasProperty(pets, 'lizard'));    // false
// console.log(objectHasProperty(pets, 'mice'));      // true

let incrementProperty = (obj, str) => {
  if(Object.keys(obj).includes(str)) {
    obj[str] += 1;
  } else {
    obj[str] = 1;
  }

  return obj[str];
};

// var wins = {
//   steve: 3,
//   susie: 4,
// };

// console.log(incrementProperty(wins, 'susie'));   // 5
// console.log(wins);                               // { steve: 3, susie: 5 }
// console.log(incrementProperty(wins, 'lucy'));    // 1
// console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

let copyProperties = (obj1, obj2) => {
  Object.keys(obj1).forEach(key => obj2[key] = obj1[key]);

  return Object.keys(obj1).length;
};

// var hal = {
//   model: 9000,
//   enabled: true,
// };

// var sal = {};
// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);                       // { model: 9000, enabled: true }

let wordCount = str => {
  let result = {};

  str.split(' ').forEach(word => result[word] = result[word] + 1 || 1);

  return result;
};

// console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }

// let greetings = (arr, obj) => {
//   console.log(`Hello, ${arr.join(' ')}! Nice to have a ${obj['title']} ${obj['occupation']} around.`);
// };

// greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// People are sitting in a theater row and you’re an usher.Given a row of seats
// that either occupied (1) or unoccupied (0) and the condition that new people
// being seated do not like to sit next to anyone else, implement the function that
// determines whether you can or cannot seat a number of people in the row.
//
// input: [1,0,0,0,0,0,1,0,0]
//  3 => true
//  4 => false

// input: [1,0,0,1,0,0,1,0,0]
//  1 => true
//  2 => false

// Given a list of words (such as might be tokenized from a paragraph of text), and
// provide a method that takes two words and returns the shortest distance (in
// words) between those two words in the provided text.

// [“the”, “quick”, “brown”, “fox”, “quick”], “fox”, “the” => 3
// [“the”, “quick”, “brown”, “fox”, “quick”], “fox”, “quick” => 1
