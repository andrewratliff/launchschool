// 1
function lastInArray(arr) {
  return arr[arr.length - 1];
}

// console.log(lastInArray([1, 2, 3]));

// 2
function rollCall(firstNames) {
  for (let i = 0; i < firstNames.length; i += 1) {
    console.log(firstNames[i]);
  };
}

// let firstNames = ['Andrew', 'Ben', 'Steve', 'Adam'];

// rollCall(firstNames);

// 3
function reverseArray(arr) {
  let result = []

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    result.push(arr[i]);
  };

  return result;
}

// console.log(reverseArray([1, 2, 3]));

// 4
function firstInstanceOf(arr, value) {
  let index;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === value) {
      index = i;
      break;
    }
  };

  return index;
}

// let arr = ['a', 'b', 'c'];

// console.log(firstInstanceOf(arr, 'b'));
// console.log(firstInstanceOf(arr, 'd'));

// 5
function stringIt(arr) {
  let result = '';

  for (let i = 0; i < arr.length; i += 1) {
    result += arr[i]
  };

  return result;
}

console.log(stringIt([1, 'a', 4]));
