// array copy part 1
// var myArray = [1, 2, 3, 4];
// var myOtherArray = myArray;

// myArray.pop();
// console.log(myOtherArray); // [1, 2, 3]

// myArray = [1, 2];
// console.log(myOtherArray); // [1, 2, 3]

// array copy part 2
// var myArray = [1, 2, 3, 4];
// var myOtherArray = myArray.slice();

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);

// array concat part 1
// function concat(arr1, secondArg) {
//   let result = arr1.slice();

//   if (Array.isArray(secondArg)) {
//     for(let i = 0; i < secondArg.length; i += 1) {
//       result.push(secondArg[i]);
//     };
//   } else {
//     result.push(secondArg);
//   }

//   return result;
// }

// console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
// console.log(concat([1, 2], 3));                     // [1, 2, 3]
// console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
// console.log(concat([2, 3], 'four'));                // [2, 3, "four"]

// var obj = { a: 2, b: 3 };
// var newArray = concat([2, 3], obj);
// console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
// console.log(newArray[2]);                              // [2, 3, { a: 2, b: 3 }]
// obj.a = 'two';
// console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, obj];
// var arr3 = concat(arr1, arr2);
// console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
// obj.b = 'three';
// console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

// arr3[5].b = 3;                                      // or, `arr3[5]['b'] = 3;`
// console.log(obj);                                   // { a: "two", b: 3 }

// arracy concat part2
// function concat() {
//   let result = [];

//   for(let i = 0; i < arguments.length; i += 1) {
//     if (Array.isArray(arguments[i])) {
//       for(let j = 0; j < arguments[i].length; j += 1) {
//         result.push(arguments[i][j]);
//       };
//     } else {
//       result.push(arguments[i]);
//     }
//   }

//   return result;
// }

// console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
// console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]

// array pop and push
// function pop(arr) {
//   if (arr.length === 0) return;

//   let result = arr[arr.length - 1];
//   arr.length = arr.length - 1;

//   return result;
// }

// var array = [1, 2, 3];
// console.log(pop(array));                        // 3
// console.log(console.log(array));                // [1, 2]
// console.log(pop([]));                           // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// function push() {
//   let result = arguments[0];

//   for (let i = 1; i < arguments.length; i += 1) {
//     result[result.length] = arguments[i];
//   };

//   return result.length;
// }

// var array = [1, 2, 3];
// console.log(push(array, 4, 5, 6));              // 6
// console.log(array);                // [1, 2, 3, 4, 5, 6]
// console.log(push([1, 2], ['a', 'b']));          // 3
// console.log(push([], 1));                       // 1
// console.log(push([]));                          // 0

// array and string reverse
// function reverse(inputForReversal) {
//   let result = [];

//   for (let i = inputForReversal.length - 1; i >= 0; i -= 1) {
//     result.push(inputForReversal[i]);
//   };

//   if (Array.isArray(inputForReversal)) {
//     return result;
//   } else {
//     return result.join('');
//   }
// }

// console.log(reverse('Hello'));           // "olleH"
// console.log(reverse('a'));               // "a"
// console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
// console.log(reverse([]));                // []

// var array = [1, 2, 3];
// console.log(reverse(array));             // [3, 2, 1]
// console.log(array);                      // [1, 2, 3]

// array shift and unshift
// function shift(arr) {
//   if (arr.length === 0) return;

//   let shifted = arr[0];

//   for (let i = 0; i < arr.length - 1; i += 1) {
//     arr[i] = arr[i + 1];
//   };

//   arr.length = arr.length - 1
//   return shifted;
// }

// function shift(arr) {
//   if (arr.length === 0) return;

//   return arr.splice(0, 1).pop();
// }

// function unshift(arr) {
//   for (let i = 0; i < arguments.length - 1; i += 1) {
//     arr.splice(i, 0, arguments[i + 1]);
//   };

//   return arr.length;
// }

// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

// console.log(unshift([1, 2, 3], 5, 6));        // 5
// console.log(unshift([1, 2, 3]));              // 3
// console.log(unshift([4, 5], [1, 2, 3]));      // 3

// var testArray = [1, 2, 3];
// console.log(shift(testArray));                // 1
// console.log(testArray);                       // [2, 3]
// console.log(unshift(testArray, 5));           // 3
// console.log(testArray);                       // [5, 2, 3]

// array slice and splice
function slice(arr, begin, end) {
  let result = [];

  if (begin > arr.length) begin = arr.length;
  if (end > arr.length) end = arr.length;

  for (let i = begin; i < end; i += 1) {
    result.push(arr[i]);
  };

  return result;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

var arr = [1, 2, 3];
console.log(slice(arr, 1, 3));                     // [2, 3]
console.log(arr);                                  // [1, 2, 3]


function splice(array, start, deleteCount, element1, elementN) {
  if (start > array.length) start = array.length;
  if (deleteCount > arr.length - start) deleteCount = arr.length - start;

  let result = []

  for (let i = start; i < start + deleteCount ; i += 1) {
    result.push(array[i]);
  };
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));             // [2]
console.log(arr);                                  // [1, "two", 3]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr);                                  // [1, "two", "three"]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                    // []
console.log(splice(arr, 1, 0, 'a'));               // []
console.log(arr);                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));               // []
console.log(arr);                                  // ["a", 1, 2, 3]

// oddities
// the two array point at different objects in memory

// array comparison
// function areArraysEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   let copiedArr = arr2.slice();

//   for (let i = 0; i < arr1.length; i += 1) {
//     if(!copiedArr.includes(arr1[i])) {
//       return false;
//     }

//     let index = copiedArr.indexOf(arr1[i]);
//     copiedArr.splice(index, 1);
//   };

//   return true;
// }


// console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
// console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
// console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
// console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
// console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
// console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
// console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
// console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
// console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
// console.log(areArraysEqual([1, 1], [1, 1]));                        // true
