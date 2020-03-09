// 1
function objectHasProperty(object, property) {
  return Object.keys(object).includes(property);
}

// solution
function objectHasProperty(object, propertyName) {
  let keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

// console.log(objectHasProperty(pets, 'dog'));       // true
// console.log(objectHasProperty(pets, 'lizard'));    // false
// console.log(objectHasProperty(pets, 'mice'));      // true

// 2
function incrementProperty(object, property) {
  if (Object.keys(object).includes(property)) {
    object[property] += 1;
  } else {
    object[property] = 1;
  }

  return object[property];
}

let wins = {
  steve: 3,
  susie: 4,
};

// console.log(incrementProperty(wins, 'susie'));   // 5
// console.log(wins);                               // { steve: 3, susie: 5 }
// console.log(incrementProperty(wins, 'lucy'));    // 1
// console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

// 3
function copyProperties(obj1, obj2) {
  let keys = Object.keys(obj1)

  for (let i = 0; i < keys.length; i += 1) {
    obj2[keys[i]] = obj1[keys[i]];
  };

  return keys.length;
}

//LS solution
function copyProperties(obj1, obj2) {
  let count = 0;

  for (let property in obj1) {
    obj2[property] = obj1[property];
    count += 1;
  };

  return count;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};

// console.log(copyProperties(hal, sal));
// console.log(sal);

// 4
function wordCount(str) {
  let result = {};
  let words = str.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    let word = words[i];

    if (result[word]) {
      result[word] += 1;
    } else {
      result[word] = 1;
    }
  };

  return result;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }
