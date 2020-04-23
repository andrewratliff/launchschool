// 01

var prot = {};

var foo = Object.create(prot);

// 02
console.log(Object.getPrototypeOf(foo) === prot);

// 03
console.log(prot.isPrototypeOf(foo));

// 04
var prot = {};

var foo = Object.create(prot);

prot.isPrototypeOf(foo);             // true
Object.prototype.isPrototypeOf(foo); // true
