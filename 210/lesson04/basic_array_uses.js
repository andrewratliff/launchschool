// 1
function firstElementOf(arr) {
  return arr[0];
}

// console.log(firstElementOf(['U', 'S', 'A']));

// 2
function lastElementOf(arr) {
  return arr[arr.length - 1];
}

// console.log(lastElementOf(['U', 'S', 'A']));

// 3
function nthElementOf(arr, index) {
  return arr[index];
}

// var digits = [4, 8, 15, 16, 23, 42];

// console.log(nthElementOf(digits, 3));   // returns 16
// console.log(nthElementOf(digits, 8));   // what does this return?
// console.log(nthElementOf(digits, -1));  // what does this return?

// 5
function firstNOf(arr, count) {
  let result = [];

  for (let i = 0; i < count; i += 1) {
    result.push(arr[i]);
  };

  return result;
}

// var digits = [4, 8, 15, 16, 23, 42];
// console.log(firstNOf(digits, 3));    // returns [4, 8, 15]

// 6
function lastNOf(arr, count) {
  let begin = arr.length - count;

  if (begin < 0) begin = 0;

  return arr.slice(begin);
}


// var digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 3));    // returns [16, 23, 42]

// 7
function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], lastElementOf(endingArr)];
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]
