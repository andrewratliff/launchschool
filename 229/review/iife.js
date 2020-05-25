// (function() {
//   console.log('Hello, World!');
// })();

// (function() {
//   console.log('Hi, World!');
// }());

// (function(a) {
//   console.log(a + 1);
// })(2);

// (function(a) {
//   console.log(a + 5);
// }(2));

// var foo = function() {
//   return function () {
//     console.log(10);
//   }();
// }();

// // messy code

// (function(number) {
//   for (let i = 0; i < number; i += 1) {
//     console.log(i);
//   };
// })(10);

// Using an IIFE to return a function with access to private data
var studentId = 0;

function generateStudentId() {
  studentId += 1;
  return studentId;
}

// The above function is at risk of having studentId reassigned, and therefore
// cannot guarantee that that student ids will be unique.

var generateStudentId = (function() {
  var studentId = 0;

  return function() {
    studentId += 1;
    return studentId;
  };
})();

// Using an IIFE to return an object with access to private data

var inventory = (function() {
  const stocks = [];

  const isValid = (newStock) => {
    return stocks.every(stock => newStock.name !== stock.name);
  };

  return {
    stockCounts() {
      stocks.forEach(function(stock) {
        console.log(stock.name + ': ' + String(stock.count));
      });
    },
    addStock(newStock) {
      if (isValid(newStock)) { stocks.push(newStock) }
    },
  }
})();
