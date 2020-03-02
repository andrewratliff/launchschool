if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}

// Unique paths:
// 1. condition1 === false
//    condition4 === false
// 2. condition1 === false
//    condition4 === true
//    condition5 === false
// 3. condition1 === false
//    condition4 === true
//    condition5 === true
// 4. condition1 === true
//    condition2 === false
// 5. condition1 === true
//    condition2 === true
