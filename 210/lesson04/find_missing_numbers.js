function missing(arr) {
  const start = arr[0];
  const end = arr[arr.length - 1];
  let missing = [];

  for (let i = start; i <= end; i += 1) {
    if (!arr.includes(i)) {
      missing.push(i);
    }
  };

  return missing;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
