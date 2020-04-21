// 1
// Yes, JavaScript is a garbage-collected language. This entails that developers
// don't need to worry about allocating and freeing up memory. Instead, JS does
// this for us automatically.

// 2
var myNum = 1;

function foo() {
  var myString = 'A string';

  // what is eligiable for GC here? neither myNum or myString
}

foo();

// what is eligible for GC here? myString
// Since myString is function scoped, the varible's reference to 'A string' is
// broken after the function execution is complete.

// 3
var outerFoo;

function bar() {
  var innerFoo = 0;
  outerFoo = innerFoo;
}

bar();

// can outerFoo's 0 be GC'd here? no (innerFoo's copy of 0 is eligible for GC
// when bar returns)

// more code

// 4
function makeEvenCounter() {
  var index = 0;
  return function function() {
    return index += 2;
  };
}

var evenCounter = makeEvenCounter();

// is 0 eligible for GC here? no, since the function returned on by
// makeEvenCounter prevents 0 from being GC'd
//
// more code

// 5
var bash = 'Some val';

// will 'Some val' ever be eligible for GC?
// Yes, after the script finishes running.
