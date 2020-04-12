// let greeter = {
//   morning: () => console.log('Good morning!'),
// }

// let evening = () => console.log('Good evening!');

// greeter.morning();

// evening();

// let functionGreeter = greeter.morning;

// functionGreeter();

// let otherFunctionGreeter = greeter.morning(); // varible points to undefined

// let counter = {
//   count: 0,
//   advance() { this.count += 1 },
// };

// let car = {
//   fuel: 7.8,
//   running: false,
//   start() {
//     this.running = true;
//   },
// };

// car.stop = function() {
//   this.running = false;
// };

// car.drive = function(distance) {
//   this.fuel -= distance / 52;
// };

let me = {
  firstName: 'Andrew',
  lastName: 'Ratliff',
};

let friend = {
  firstName: 'John',
  lastName: 'Smith',
};

let mother = {
  firstName: 'Tina',
  lastName: 'Ratliff',
};

let father = {
  firstName: 'Jeff',
  lastName: 'Ratliff',
};

// let fullName = person => {
//   console.log(`${person.firstName} ${person.lastName}`);
// };

// let people = [];

// people.push(me);
// people.push(friend);
// people.push(mother);
// people.push(father);

// let rollCall = collection => {
//   collection.forEach(fullName);
// };

let people = {
  collection: [me, friend, mother, father],
  next_index() {
    return this.collection.length;
  },
  get(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },
  update(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let existingPersonId = this.getIndex(person);

    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
  fullName(person) {
    console.log(`${person.firstName} ${person.lastName}`);
  },
  rollCall() {
    this.collection.forEach(this.fullName);
  },
  add(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    person.index = this.next_index();

    this.collection.push(person);
  },
  remove(person) {
    let index;
    if (!this.isInvalidPerson(person)) {
      return;
    }

    index = this.getIndex(person);

    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },
  getIndex(person) {
    let index = -1;

    this.collection.forEach((comparator, i) => {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
        index = i;
      }
    });

    return index;
  },
  isInvalidPerson(person) {
    return typeof person.firstName !== 'string' && typeof person.last !== 'string';
  },
};
