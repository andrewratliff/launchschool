let numbers = [0, 1, 2, 4, 5];

function push(arr, val) {
  arr[arr.length] = val;

  return arr.length;
}

// let length = push(numbers, 5);
// console.log(length);
// console.log(numbers);

function pop(arr) {
  let popped = arr[arr.length - 1];
  arr.length = arr.length - 1;

  return popped;
}

// let popped = pop(numbers);
// console.log(popped);
// console.log(numbers);

function unshift(arr, val) {
  let previous = val;
  let length = arr.length;

  for (let i = 0; i <= length; i += 1) {
    let temp = arr[i];
    arr[i] = previous;
    previous = temp;
  };

  return arr.length;
}

// unshift(numbers, 10)
// console.log(numbers);

function shift(arr) {
  let val = arr[0];

  if (arr.length === 0) {
    return undefined;
  }

  for (let i = 0; i < arr.length - 1; i += 1) {
    arr[i] = arr[i + 1];
  };

  arr.length = arr.length - 1;
  return val;
}

// let result = shift(numbers);
// console.log(result);
// console.log(numbers);

// result = shift([]);
// console.log(result);
// console.log(numbers);

function indexOf(arr, val) {
  let index = -1;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === val) {
      index = i;
      break;
    }
  };

  return index;
}

// console.log(indexOf(numbers, 5));
// console.log(indexOf(numbers, 10));

function lastIndexOf(arr, val) {
  let index = -1;

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] === val) {
      index = i;
      break;
    }
  };

  return index;
}

// push(numbers, 2);
// console.log(lastIndexOf(numbers, 2));
// console.log(lastIndexOf(numbers, 10));

function slice(arr, start, end) {
  let result = [];

  for (let i = start; i < end; i += 1) {
    push(result, arr[i]);
  };

  return result;
}

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

function splice(arr, start, num) {
  let newLength = arr.length - num;
  let removed = [];

  for (let i = start; i < start + num; i += 1) {
    push(removed, arr[i]);
    arr[i] = arr[i + num];
  };

  arr.length = newLength;
  return removed;
}

// console.log(splice(numbers, 2, 2));
// console.log(numbers);

// var count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);

function concat(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i += 1) {
    push(result, arr1[i]);
  };

  for (let i = 0; i < arr2.length; i += 1) {
    push(result, arr2[i]);
  };

  return result;
}

// console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

function join(arr, delimiter) {
  let result = '';

  for (let i = 0; i < arr.length; i += 1) {
    if (i === arr.length - 1) {
      result += String(arr[i]);
    } else {
      result += `${arr[i] + delimiter}`
    }
  };

  return result;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
