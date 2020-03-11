// 1 defaults

// 2 equal
// var person = { name: 'Victor' };
// var otherPerson = person;

// console.log(person === otherPerson);    // false -- expected: true

// 3 amount payable
// var startingBalance = 1;
// var chicken = 5;
// var chickenQuantity = 7;

// var totalPayable = function (item, quantity) {
//   return startingBalance + (item * quantity);
// };

// startingBalance = 5;
// console.log(totalPayable(chicken, chickenQuantity)); // 40

// startingBalance = 10;
// console.log(totalPayable(chicken, chickenQuantity)); // 45

// 4 caller
// function doubler(number, caller) {
//   console.log('This function was called by ' + caller + '.');
//   return number + number;
// }

// doubler(5, 'Victor');                   // returns 10
// // logs:
// // This function was called by Victor.

// function makeDoubler(caller) {
//   return (number) => {
//     console.log('This function was called by ' + caller + '.');
//     return number + number;
//   };
// }
// var doubler = makeDoubler('Victor');
// doubler(5);                             // returns 10
// // logs:
// // This function was called by Victor.

// 5 what's my value?
// var array = ['Apples', 'Peaches', 'Grapes'];

// array[3.4] = 'Oranges';
// console.log(array.length); // 3
// console.log(Object.keys(array).length); // 4

// array[-2] = 'Watermelon';
// console.log(array.length); // 3
// console.log(Object.keys(array).length); // 5

// 6 length
// var languages = ['JavaScript', 'Ruby', 'Python'];
// console.log(languages); // ['JavaScript', 'Ruby', 'Python'];
// console.log(languages.length); // 3

// languages.length = 4;
// console.log(languages); // ['JavaScript', 'Ruby', 'Python', undefined];
// console.log(languages.length); // 4

// languages.length = 1;
// console.log(languages); // ['JavaScript']
// console.log(languages.length); // 1

// languages.length = 3;
// console.log(languages); // ['JavaScript', undefined, undefined]
// console.log(languages.length); // 3

// languages.length = 1;
// languages[2] = 'Python';
// console.log(languages); // ['JavaScript', undefined, 'Python']
// console.log(languages[1]); // undefined
// console.log(languages.length); // 3

// 7 the red pill
function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne() {
    var result = '';
    var i;
    for (i = 0; i < arguments.length; i += 1) {
      result += String.fromCharCode(arguments[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);

// logs:
// Welcome
// to
// the
// Matrix!
