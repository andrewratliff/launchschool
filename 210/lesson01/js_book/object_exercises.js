// let person = {
//   name: 'Andrew',
//   age: '32',
//   hobbies: ['photography', 'programming']
// }

// console.log(person.name)
// console.log(person['name'])

// let myArray = {
//   0: 'Andrew',
//   1: '32',
//   2: ['photography', 'programming'],
//   length: 3
// };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// let arr = []

// for (let key in obj) {
//   arr.push(key.toUpperCase());
// };

// let arr = Object.keys(obj).map((key) => key.toUpperCase());

// console.log(arr);

// let myProtoObj = {
//   foo: 1,
//   bar: 2,
// };

// let myObj = Object.create(myProtoObj);

// myObj['qux'] = 3;

// // Object.keys only returns the object's own properties
// console.log('--- Object.keys() ---')
// Object.keys(myObj).forEach((key) => console.log(key));

// // for/in iterates though all the object's keys, include prototype keys
// console.log('--- for/in ---')
// for (let key in myObj) {
//   console.log(key);
// };

// // can use hasOwnProperty() to only get the objects own properties
// console.log('--- for/in with hasOwnProperty() ---')
// for (let key in myObj) {
//   if (myObj.hasOwnProperty(key)) {
//     console.log(key);
//   }
// };

// let copyObj = (obj, keys = Object.keys(obj)) => {
//   let newObj = {}

//   keys.forEach((key) => newObj[key] = obj[key] );

//   return newObj;
// };

// let objToCopy = { foo: 1, bar: 2 };

// let newObj = copyObj(objToCopy);
// console.log(newObj.foo);
// console.log(newObj.bar);

// let newObj2 = copyObj(objToCopy, [ 'foo' ]);
// console.log(newObj2.foo);
// console.log(newObj2.bar);

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(arg1, arg2) {
  arg1.a = 'hi';
  arg2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // logs 'hi'
console.log(qux);   // logs 'hello'
