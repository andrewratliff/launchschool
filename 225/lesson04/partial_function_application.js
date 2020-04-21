// function add(num1, num2) {
//   return num1 + num2;
// }

// function makeAddN(addend) {
//   return function(number) {
//     return add(addend, number);
//   }
// }

// let add1 = makeAddN(1);
// console.log(add1(20));

// let add10 = makeAddN(10);
// console.log(add10(20));

function add(first, second) {
  return first + second;
}

function repeat(count, string) {
  let result = '';

  for(let i = 0; i < count; i += 1) {
    result += string;
  };

  return result;
}

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

// 1
function greet(greeting, name) {
  greeting = greeting[0].toUpperCase() + greeting.slice(1);
  console.log(`${greeting}, ${name}!`);
}

let sayHello = partial(greet, 'Hello');
let sayHi = partial(greet, 'Hi');
