// 01 Ancestors

// name property added to make objects easier to identify
var foo = {name: 'foo'};

// foo.ancestors = function() {
//   const result = [];
//   let obj = Object.getPrototypeOf(this);

//   while (obj.name) {
//     result.push(obj.name);
//     obj = Object.getPrototypeOf(obj);
//   };

//   result.push('Object.prototype');

//   return result;
// };

// LS solution
Object.prototype.ancestors = function ancestors() {
  var ancestor = Object.getPrototypeOf(this);

  if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
    return [ancestor.name].concat(ancestor.ancestors());
  }

  return ['Object.prototype'];
};

var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

// console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
// console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
// console.log(foo.ancestors());  // returns ['Object.prototype']

// 02 Delegate
function delegate(obj, methodName, ...args) {
  return function() {
    return obj[methodName].apply(obj, args);
  }
}

var foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

var baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

// baz.qux();   // logs 'hello test';

// foo.bar = function() { console.log('changed'); };

// baz.qux();          // logs 'changed'
