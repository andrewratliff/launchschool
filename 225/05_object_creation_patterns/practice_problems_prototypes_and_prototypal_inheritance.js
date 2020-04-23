// 01
// function getDefiningObject(object, propKey) {
//   if (object.hasOwnProperty(propKey)) {
//     return object;
//   } else {
//     let parent = Object.getPrototypeOf(object);

//     if (parent) {
//       return getDefiningObject(parent, propKey);
//     }

//     return null;
//   }
// }

// LS solution
function getDefiningObject(object, propKey) {
  while (object && !object.hasOwnProperty(propKey)) {
    object = Object.getPrototypeOf(object);
  };

  return object;
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
var baz = Object.create(bar);

baz.d = 4;
var qux = Object.create(baz);

bar.c = 3;

// console.log(getDefiningObject(qux, 'c') === bar);     // => true
// console.log(getDefiningObject(qux, 'e'));             // => null
// console.log(getDefiningObject(qux, 'd') === baz);     // => true

// 2
function shallowCopy(object) {
  let copy = Object.create(Object.getPrototypeOf(object));

  Object.getOwnPropertyNames(object).forEach(prop => {
    copy[prop] = object[prop]
  });

  return copy;
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

var baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// console.log(baz.say());                // => c is 3
// console.log(baz.hasOwnProperty('a'));  // false
// console.log(baz.hasOwnProperty('b'));  // false

// 03
function extend(destination, ...args) {
  args.forEach(arg => {
    Object.getOwnPropertyNames(arg).forEach(prop => {
      destination[prop] = arg[prop];
    })
  });

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
  name: 'Joe'
};

var funcs = {
  sayHello: function() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye: function() {
    console.log('Goodbye, ' + this.name);
  },
};

var object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
console.log(object.sayHello());                // => Hello, Joe
