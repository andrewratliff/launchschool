var turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription: function() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func, context) {
  var returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);

const getTurkDescription = turk.getDescription.bind(turk);

var TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(title => {
      console.log(this.seriesTitle + ' ' + title);
    });
  }
};

TESgames.listGames();

var foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    };

    increment.apply(this);
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
