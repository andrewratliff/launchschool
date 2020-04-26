const a = { a: 1 };

const counter = (function() {
  console.log(this);
  let count = 0;
  return {
    advance: () => {
      count += 1;
      console.log(`The count is now ${count}!`);
      console.log(this);
    }
  }
}).call(a);

const counter2 = (function() {
  console.log(this);
  let count = 0;
  return {
    advance: () => {
      count += 1;
      console.log(`The count is now ${count}!`);
      console.log(this);
    }
  }
})();

const counter3 = (function() {
  console.log(this);
  let count = 0;

  return {
    advance: function() {
      count += 1;
      console.log(`The count is now ${count}!`);
      console.log(this);
    }
  }
})();

const counter4 = (function() {
  console.log(this);
  let count = 0;

  return function() {
    count += 1;
    console.log(`The count is now ${count}!`);
    console.log(this);
  }
})();

const me = {
  firstName: 'Jane',
  lastName: 'Doe',
};

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

fullName(me);

var friend = {
  firstName: 'John',
  lastName: 'Smith',
};

fullName(friend);

var mom = {
  firstName: 'Mom',
  lastName: 'Smith',
};

var dad = {
  firstName: 'Dad',
  lastName: 'Smith',
};

var people = [];
people.push(me);
people.push(friend);
people.push(mom);
people.push(dad);

function rollCall(collection) { collection.forEach(fullName) };

var people = {
  collection: [me, friend, mom, dad],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(this.fullName);
  },

  add: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    this.collection.push(person);
  },

  getIndex: function(person) {
    let index = -1;

    this.collection.forEach((comparator, i) => {
      if (person.firstName === comparator.firstName &&
          person.lastName === comparator.lastName) {
        index = i;
      }
    });

    return index;
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName === 'string' && typeof person.lastName === 'string';
  },

  remove: function(person) {
    const index = this.getIndex(person);

    if (this.isInvalidPerson(person)) {
      return;
    }

    if (index === -1) {
      return;
    } else {
      console.log("That person is not on Santa's list!");
    }

    this.collection.splice(index, 1);
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    };

    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    const existingPersonId = this.getIndex(person);

    if (existingPersonId === -1) {
      tihs.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  }
};
