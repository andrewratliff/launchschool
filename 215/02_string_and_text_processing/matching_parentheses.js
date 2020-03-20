let isBalanced = str => {
  let balance = 0;

  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];

    if (char === '(') {
      balance += 1;
    } else if (char === ')') {
      balance -= 1;
    }

    if (balance < 0) {
      return false;
    }
  };

  return balance === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
