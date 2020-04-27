// 1/2
(function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();

// 3
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
  (function(num) {
    for (let i = num; i >= 0; i -= 1) {
      console.log(i);
    };

    console.log('Done!');
  })(start);
}

// 5
// No.

// 6
function countdown(start) {
  (function func(num) {
    if (num >= 0) {
      console.log(num);
      func(num - 1);
    }

    console.log('Done!');
  })(start);
}
