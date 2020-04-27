// 01
// What are the characteristics of higher-order functions?
// Higher order functions can take functions as an argument, return a function,
// or both.

// 02
var numbers = [1, 2, 3, 4];
function checkEven(number) {
  return number % 2 === 0;
}

numbers.filter(checkEven);
// In this example, filter is a higher-order function.

// 03
var numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return function(number) {
    return number % 2 === 0;
  };
}

var checkEven = makeCheckEven();

numbers.filter(checkEven);

// 04
function execute(func, operand) {
  return func(operand);
}

execute(function(number) {
  return number * 2;
}, 10);

execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy');

// 5
function makeListTransformer(func) {
  return function(collection) {
    return collection.map(func);
  };
}

var timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4]));
