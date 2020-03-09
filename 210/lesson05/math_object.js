// 1
function radiansToDegrees(radians) {
  return radians / (Math.PI / 180)
}

// 2
let degrees = -180
// console.log(Math.abs(degrees));

// 3
// console.log(Math.sqrt(16777216));

// 4
// console.log(Math.pow(16, 6));

// 5
let a = 50.72;
let b = 49.2;
let c = 49.86;

// console.log(Math.floor(a));
// console.log(Math.ceil(b));
// console.log(Math.round(c));

// 6
function randomNumberBetween(min, max) {
  if (min === max) return min;

  if (min > max) {
    let temp = min;
    min = max;
    max = temp;
  }

  return Math.floor(Math.random() * (max - min) + min);
}
console.log(randomNumberBetween(10, 20));
