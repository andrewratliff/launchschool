// Factory Functions
function createPerson(firstName, lastName) {
  var person = {};
  person.firstName = firstName;
  person.lastName = lastName || '';
  person.fullName = function () {
    return (this.firstName + ' ' + this.lastName).trim();
  };

  return person;
}

var john = createPerson('John', 'Doe');
var jane = createPerson('Jane');

// Two disadvantages of factory functions:
// 1. Methods defined in the factory are copied onto every object, which is
// redundant and uses more memory than necessary.
// 2. There is no way to tell if an object was created from a certain factory,
// or if two objects are from the same factory.

function makeObj() {
  var obj = {};
  obj.propA = 10;
  obj.probB = 20;
  return obj;
}

// the above factory function written with object literal syntax:
function makeObj() {
  return {
    propA: 10,
    probB: 20,
  };
}

// var invoice = {
//   phone: 3000,
//   internet: 6500,
// };

// var payment = {
//   phone: 1300,
//   internet: 5500,
// };

// var invoiceTotal = invoice.phone + invoice.internet;
// var paymentTotal = payment.phone + payment.internet;
// var remainingDue = invoiceTotal - paymentTotal;

// create a factory function that allows us to create invoices with the
// following requirements:
// 1. It returns an invoice object, with `phone` and `internet` properties, and
// a `total` method.
// 2. The default value for the phone service is `3000`, and the internet
// service is `5500`.
// 3. The function takes an object argument with attributes to override the
// default values.

function createInvoice(services) {
  services = services || {}

  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    total() {
      return this.internet + this.phone;
    },
  };
}

function invoiceTotal(invoices) {
  return invoices.reduce((total, invoice) => total += invoice.total(), 0);
}

var invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

// Constructor Pattern
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName || '';
  this.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };
}

class OtherPerson {
  constructor(firstName, lastName) {
    if (!lastName) {
      return { invalid: 'Please provide a last name' };
    }

    this.firstName = firstName;
    this.lastName = lastName || '';
  }

  get fullName() {
    return (this.firstName + ' ' + this.lastName).trim();
  };
}

var john = new Person('John', 'Doe');
var jane = new Person('Jane');

var andy = new OtherPerson('Andy', 'Doe');
var barb = new OtherPerson('Barb');

// What happens when the new keyword is used?
// 1. A new object is created.
// 2. Inside the constructor, `this` points at the new object.
// 3. The code inside the function is executed.
// 4. `this` is returned if the constructor doesn't explicitly return an object.

// Object's prototypes

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
bar.__proto__ === foo;         // true

// We can say that the object assigned to foo is the prototype object for the
// object returned by Object.create and assigned to bar. We could also say that
// we created the object bar with the object foo as its prototype.

// Prototype chain and the Object.prototype Object

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
var baz = Object.create(bar);
var qux = Object.create(baz);

var prot = {}

var foo = Object.create(prot);
Object.prototype.isPrototypeOf(foo); // returns true because isPrototypeOf searches up the chain

// Prototypal Inheritance and Behavior Delegation

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
var baz = Object.create(bar);

var foo = {
  hello() {
    return 'hello ' + this.name;
  },
};

var bar = Object.create(foo);
bar.name = 'world';

var dog = {
  say: function() {
    console.log(this.name + ' says Woof!');
  },

  run: function() {
    console.log(this.name + ' runs away.');
  },
};

var fido = Object.create(dog);
fido.name = 'Fido';

var spot = Object.create(dog);
spot.name = 'Spot';

var dido = Object.create(fido);
dido.name = 'Dido';

var foo = {
  a: 1,
};

var bar = Object.create(foo);
bar.a = 1;
bar.b = 2;

var boo = {}
boo.myProp = 1;

var far = Object.create(boo);

function getDefiningObject(object, propKey) {
  if (object && object.hasOwnProperty(propKey)) {
    return object;
  } else if (object) {
    let prototype_obj = Object.getPrototypeOf(object);
    return getDefiningObject(prototype_obj, propKey);
  } else {
    return null;
  }
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
var baz = Object.create(bar);
var qux = Object.create(baz);

bar.c = 3;

function shallowCopy(object) {
  let copy = Object.create(Object.getPrototypeOf(object));

  Object.keys(object).forEach(key => {
    copy[key] = object[key];
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
// baz.say();                // => c is 3
// baz.hasOwnProperty('a');  // false
// baz.hasOwnProperty('b');  // false

function extend(destination, ...args) {
  args.forEach(arg => {
    Object.getOwnPropertyNames(arg).forEach(prop => {
      destination[prop] = arg[prop];
    });
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

// console.log(object.b.x);          // => 1
// object.sayHello();                // => Hello, Joe

// Function Prototypes and Object Prototypes
// var Foo = function() {};
// var obj = Foo.prototype;

// var bar = new Foo();
// var baz = new Foo();

// // when Foo is called with new, as a constructor
// function Foo(a, b) {
//   // this = new Object();            // a new object, or just {}
//   // this.__proto__ = Foo.prototype; // have the object inherit from Foo.prototype

//   this.a = a;
//   this.b = b;

//   // return this;                    // return the created object
// }

// var Dog = function(name = 'Doggo') {
//   this.name = name;
// };

// Dog.prototype.say = function() {
//   console.log(this.name + ' says Woof!');
// };

// Dog.prototype.run = function() {
//   console.log(this.name + ' runs away.');
// };

// Dog.prototype.name = 'Doggy';

// var fido = new Dog();

function Animal(type) {
  this.type = type;
}

Animal.prototype.move = function() {
  console.log('Animal is moving.');
};

var Dog = function() {};
Dog.prototype = new Animal('land');

Dog.prototype.say = function() {
  console.log(this.name + ' says Woof!');
};

Dog.prototype.run = function() {
  console.log(this.name + ' runs away.');
};

var fido = new Dog();

// Two methods for extending the prototype chain with constructors
// 1. Set the prototype of a constructor function to the object that is returned
// by the desired parent's constructor
//
// Method 1 has a side effect of any object you create from the Dog constructor
// will, by default, have the properties of the object returned from the Animal
// constructor.
//
// 2. Use Object.create(Parent.prototype) to create a new object that is the
// child of the parent and set that to the prototype of the child constructor
// function
