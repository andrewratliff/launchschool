// 1
// function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// }();
// the above code produces a syntax error

// 2
(function() {
  console.log('no errors here!');
})();

let asdf = function() {
  console.log('no errors here!');
}();

// 3
// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// }

// sum += sum(numbers);

// the above highlights an issue with varible shadowing. The function sum is
// hoisted to the top of the code and then reassigned to 0.
// fix:
var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

sum += (function sum(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);

// 4
function countdown(start) {
  (function(start) {
    for (let i = start; i >= 0; i -= 1) {
      console.log(i);
    }

    console.log('Done!');
  })(start);
}

// 5
// named IIFE aren't visible outside the scope it creates with ()

// 6
function countdown(start) {
  (function recursive(n) {
    console.log(n);

    if (n === 0) {
      console.log('Done!');
    } else {
      recursive(n - 1);
    }
  })(start);
}
