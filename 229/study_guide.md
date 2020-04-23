How can we override the say function using an arrow function.

```javascript
var dog = {
  say() {
    console.log(this.name + ' says Woof!');
  }
};

var fido = Object.create(dog);
fido.name = 'Fido';
fido.say = function() {
  console.log(this.name + ' says Woof Woof!');
};

fido.say();
var spot = Object.create(dog);
spot.name = 'Spot';
spot.say();
```
