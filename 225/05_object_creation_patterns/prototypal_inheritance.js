var foo = {
  a: 1,
  b: 2,
}

var bar = Object.create(foo);
var baz = Object.create(bar);

// console.log(baz);
// console.log(baz.a);

var foo = {
  hello: function() {
    return 'hello ' + this.name;
  }
};

var bar = Object.create(foo);
bar.name = 'world';
bar.hello();

var dog = {
  say() {
    console.log(this.name + ' says Woof!');
  },

  run() {
    console.log(this.name + ' runs away.');
  }
};

// var fido = Object.create(dog);
// fido.name = 'Fido';
// fido.say();
// fido.run();

// var spot = Object.create(dog);
// spot.name = 'Spot';
// spot.say();
// spot.run();

var dog = {
  say() {
    console.log(this.name + ' says Woof!');
  }
};

var fido = Object.create(dog);
fido.name = 'Fido';
fido.say = function() {
  console.log(this.name + ' says Woof Woof!');
};

// fido.say();
// var spot = Object.create(dog);
// spot.name = 'Spot';
// spot.say();

// var foo = {
//   a: 1,
// };

// var bar = Object.create(foo);
// bar.a = 1;
// bar.b = 2;
// bar.hasOwnProperty('a');          // true
// Object.getOwnPropertyNames(bar);  // ["a", "b"]

// delete bar.a;
// bar.hasOwnProperty('a');          // false
// Object.getOwnPropertyNames(bar);  // ["b"]

// bar.hasOwnProperty('c');

// Problems
// 01 What will the code below log to the console?
var foo = {};
var bar = Object.create(foo);

foo.a = 1;

console.log(bar.a);

// 02
var foo = {};
var bar = Object.create(foo);

foo.a = 1;
bar.a = 2;
console.log(bar.a);

// 03
var boo = {};
boo.myProp = 1;

var far = Object.create(boo);

// lots of code

console.log(far.hasOwnProperty('myProp'));
far.myProp = 2;       // 1
