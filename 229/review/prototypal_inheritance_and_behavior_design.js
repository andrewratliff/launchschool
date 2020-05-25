var dog = {
  type: 'animal',

  say() {
    console.log(this.name + ' says Woof!');
  },

  run() {
    console.log(this.name + ' runs away.');
  },
}

var fido = Object.create(dog);
fido.name = 'Fido';

var spot = Object.create(dog);
spot.name = 'Spot';

fido.say = function() {
  console.log(this.name + ' says Woof Woof!');
};

var foo = {
  a: 1,
};

var bar = Object.create(foo);
bar.a = 1;
bar.b = 2;
