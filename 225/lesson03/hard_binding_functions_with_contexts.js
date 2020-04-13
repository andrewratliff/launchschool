var a = 'goodbye';

var object = {
  a: 'hello',
  b: 'world',
  foo: function() {
    return this.a + ' ' + this.b;
  },
};

var bar = object.foo;
console.log(bar());

var baz = object.foo.bind(object);
console.log(baz());

var object2 = {
  a: 'hi',
  b: 'there',
};

console.log(baz.call(object));
console.log(baz.call(object2));

var greetings = {
  morning: 'Good morning, ',
  afternoon: 'Good afternoon, ',
  evening: 'Good evening, ',

  greeting: function(name) {
    var currentHour = (new Date()).getHours();

    if (currentHour < 12) {
      console.log(this.morning + name);
    } else if (currentHour < 18) {
      console.log(this.afternoon + name);
    } else {
      console.log(this.evening + name);
    }
  },
};

var spanishWords = {
  morning: 'Buenos dias, ',
  afternoon: 'Buenas tardes, ',
  evening: 'Buena noches, ',
};

var spanishGreeter = greetings.greeting.bind(spanishWords);

console.log(spanishGreeter('Jose'));
console.log(spanishGreeter('Juan'));
