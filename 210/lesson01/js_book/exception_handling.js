// let names = ['bob', 'joe', 'steve', undefined, 'frank'];

// names.forEach(name => {
//   try {
//     console.log(`${name}'s name has ${name.length} letters in it.`);
//   } catch (exception) {
//     console.log('Someting went wrong');
//   } finally {
//     console.log('finallyyyyy');
//   }
// });

function foo(number) {
  if (typeof number !== 'number') {
    throw new TypeError('expected a number');
  }

  console.log(number);
}

foo(1);
foo('1');
