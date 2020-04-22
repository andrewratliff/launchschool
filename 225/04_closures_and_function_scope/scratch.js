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

function countdown(start) {
  (function (start) {
    for(let i = start; i >= 0; i -= 1) {
      console.log(i);
    };

    console.log('Done!');
  })(start)
}


function countdown(start) {
  (function log(n) {
    console.log(n);

    if (n > 0) {
      log(n - 1);
    } else {
      console.log('Done!');
    }
  })(start);
}

countdown(7);
