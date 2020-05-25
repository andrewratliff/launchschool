function add(first, second) {
  return first + second;
}

function addOne(value) {
  return add(1, value);
}

function primaryFunction(arg1, arg2) {
  console.log(arg1);
  console.log(arg2);
}

function generatorFunction(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

const applicationFunction = generatorFunction(primaryFunction, 'hello');

applicationFunction('world');

function makeAddN(addend) {
  return function(number) {
    return add(addend, number);
  };
}

function repeat(count, string) {
  let result = '';

  for (let i = 0; i < count; i += 1) {
    result += string;
  };

  return result;
}

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

// Problems
// 1

function greet(greeting, name) {
  greeting = greeting[0].toUpperCase() + greeting.slice(1);

  console.log(`${greeting}, ${name}!`);
}

const sayHello = greet.bind(null, 'hello');
const sayHi = greet.bind(null, 'hi');
