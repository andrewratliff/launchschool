var myObject = {
  count: 1,
  myChildObject: {
    myMethod() {
      return this.count;
    },
  },
}

var a = 1;
var obj = {
  a: 2,
  func() {
    console.log(this.a);
  },
};

var computer = {
  price: 30000,
  shipping: 2000,
  total() {
    var tax = 3000;
    var specialDiscount = function() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }.bind(this);

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log(computer.total());
