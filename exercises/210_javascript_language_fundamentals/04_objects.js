// 1. literal
var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

// console.log(myObject[1]);
// console.log(myObject[a]); // raises a ReferenceError since a is not a string
// console.log(myObject.a);

// 2. literal method
var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

// console.log(person.firstName + ' ' + person.lastName); // object literal methods must be call with () just like functions

// 3. mutation
var array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = [];
var i;

// for (i = 0; i < array1.length; i += 1) {
//   array2.push(array1[i]);
// }

array2 = array1; // this way they both point at the same object

for (i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

// console.log(array2); // logs a new array with the same elements as the original array1

// 4. dynamic
var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

// console.log(myObject[prop2]);
// console.log(myObject.prop2);

// further exploration
var myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

// console.log(myObj);
// myObj[myFunc()] = 'world!';
// console.log(myObj);

// 5. array object part 1
var myArray = ['a', 'b', 'c'];

// console.log(myArray[0]);
// console.log(myArray[-1]);

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

// console.log(myArray[-1]);
// console.log(myArray['e']);
// console.log(myArray);

// 6. array object part 2
var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / Object.keys(array).length;
}

// console.log(average(myArray));

// 7. what's my bonus
function calculateBonus(...args) {
  return args[1] ? args[0] / 2 : 0;
}


// console.log(calculateBonus(2800, true));               // 1400
// console.log(calculateBonus(1000, false));              // 0
// console.log(calculateBonus(50000, true));              // 25000

// 8. the end is near but not here
function penultimate(string) {
  return string.split(' ')[-2]; // there is no key -2 in the array
}

function penultimate(string) {
  let words = string.split(' ');
  return words[words.length - 2];
}

// LS solution
function penultimate(string) {
  return string.split(' ').slice();
}

// console.log(penultimate('last word'));                    // expected: "last"
// console.log(penultimate('Launch School is great!'));      // expected: "is"

// 9. after midnight part 1
// var MINUTES_PER_HOUR = 60;
// var HOURS_PER_DAY = 24;
// var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function timeOfDay(deltaMinutes) {
//   var hours;
//   var minutes;

//   deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   if (deltaMinutes < 0) {
//     deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
//   }

//   hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   minutes = deltaMinutes % MINUTES_PER_HOUR;

//   return padWithZeroes(hours, 2) + ':' + padWithZeroes(minutes, 2);
// }

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}

function timeOfDay(deltaMinutes) {
  const MILISECONDS_PER_MINUTE = 60000;

  let afterMidnight = new Date(deltaMinutes * MILISECONDS_PER_MINUTE);
  let hours = padWithZeroes(afterMidnight.getUTCHours(), 2);
  let minutes = padWithZeroes(afterMidnight.getUTCMinutes(), 2);

  return `${hours}:${minutes}`;
}

// console.log(timeOfDay(0));          // "00:00"
// console.log(timeOfDay(-3));         // "23:57"
// console.log(timeOfDay(35));         // "00:35"
// console.log(timeOfDay(-1437));      // "00:03"
// console.log(timeOfDay(3000));       // "02:00"
// console.log(timeOfDay(800));        // "13:20"
// console.log(timeOfDay(-4231));      // "01:29"

// 10 After Midnight Part 2
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const MILISECONDS_PER_MINUTE = 60000;


// function afterMidnight(timeStr) {
//   const timeComponents = timeStr.split(':');
//   const hours = parseInt(timeComponents[0], 10);
//   const minutes = parseInt(timeComponents[1], 10);
//   const midnight = new Date(0);
//   const time = new Date(0);

//   time.setUTCHours(hours);
//   time.setUTCMinutes(minutes);

//   return (time.getTime() - midnight.getTime()) / MILISECONDS_PER_MINUTE;
// }

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

// from John Isom
function afterMidnight(timeStr) {
  return Date.parse(`1970-01-01 ${timeStr} GMT`) / MILISECONDS_PER_MINUTE;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686
