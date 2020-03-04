let name = 'Andrew';

function greet() {
  let otherName = 'Ben';

  console.log(name);

  function otherGreet() {
    console.log(otherName);
  }

  otherGreet();
}

greet();
