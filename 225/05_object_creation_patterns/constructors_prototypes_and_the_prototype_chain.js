function Animal(type) {
  this.type = type;
}

Animal.prototype.move = function() {
  console.log('Animal is moving.');
};

var Dog = function() {};
// Method 1: Using the object returned by the animal constructor
Dog.prototype = new Animal('land');

// Method 2: Using the object created by Object.create(Animal.prototype)
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.say = function() {
  console.log(this.name + ' says Woof!');
};

Dog.prototype.run = function() {
  console.log(this.name + ' runs away.');
};
