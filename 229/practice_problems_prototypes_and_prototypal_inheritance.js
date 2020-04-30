// 1
// function getDefiningObject(object, propKey) {
//   if (object === Object.prototype) {
//     return null;
//   }

//   if (object.hasOwnProperty(propKey)) {
//     return object;
//   } else {
//     return getDefiningObject(Object.getPrototypeOf(object), propKey);
//   }
// }

// var foo = {
//   a: 1,
//   b: 2,
// };

// var bar = Object.create(foo);
// var baz = Object.create(bar);
// var qux = Object.create(baz);

// bar.c = 3;

// 2
// function shallowCopy(object) {
//   const copy = Object.create(Object.getPrototypeOf(object));

//   Object.getOwnPropertyNames(object).forEach(prop => {
//     copy[prop] = object[prop];
//   });

//   return copy;
// }

// var foo = {
//   a: 1,
//   b: 2,
// };

// var bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };

// var baz = shallowCopy(bar);
// console.log(baz.a);
// baz.say();
// console.log(baz.hasOwnProperty('a'));
// console.log(baz.hasOwnProperty('b'));

// 3
function extend(destination, ...args) {
  args.forEach(arg => {
    Object.getOwnPropertyNames(arg).forEach(prop => {
      destination[prop] = arg[prop];
    })
  });

  return destination;
}

function extend(destination, ...args) {
  // args.forEach(arg => Object.assign(destination, arg));

  // return destination;
  Object.assign(destination, ...args);

  return destination;
}

var foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

var joe = {
  name: 'Joe',
};

var funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

var object = extend({}, foo, joe, funcs);

console.log(object.b.x);
object.sayHello();
