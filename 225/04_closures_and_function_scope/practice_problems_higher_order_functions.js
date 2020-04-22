// 1
// Higher-order functions are functions that take a function as an argument
// and/or return a function.
// 1. take function as an argument
// 2. return a function
// 3. both

// 2
var numbers = [1, 2, 3, 4];
function checkEven(number) {
  return number % 2 === 0;
}

numbers.filter(checkEven); // [2, 4]
// filter is a higher-order function since it takes a function (checkEven in
// this example) as an argument.

// 3
var numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return function(number) {
    return number % 2 === 0;
  };
}

var checkEven = makeCheckEven();

numbers.filter(checkEven); // [2, 4]

// 4
function execute(func, operand) {
  return func(operand);
}

execute(function(number) {
  return number * 2;
}, 10); // 20

execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy'); // 'HEY THERE BUDDY'

// 5
function makeListTransformer(func) {
  return function(collection) {
    return collection.map(func);
  };
}

var timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

timesTwo([1, 2, 3, 4]); // [2, 4, 6, 8]

var timesTwo = function(collection) {
  return collection.map(function(number) {
    return number * 2;
  });
};
