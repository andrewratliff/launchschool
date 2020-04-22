// var chile = {
//   name: 'The Republic of Chile',
//   continent: 'South America',
//   getDescription: function() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// var canada = {
//   name: 'Canada',
//   continent: 'North America',
//   getDescription: function() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// var southAfrica = {
//   name: 'The Republic of South Africa',
//   continent: 'Africa',
//   getDescription: function() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

let makeCountry = (name, continent, visited = false) => {
  return {
    name: name,
    continent: continent,
    visited: visited,
    getDescription() {
      return `${this.name} is located in ${this.continent}. I ${this.visited ? 'have' : "haven't"} visited ${this.name}.`;
    },
    visitCountry() {
      this.visited = true;
    },
  }
};

var chile = makeCountry('The Republic of Chile', 'South America');
var canada = makeCountry('Canada', 'North America');
var southAfrica = makeCountry('The Republic of South Africa', 'Africa');

chile.getDescription();       // "The Republic of Chile is located in South America."
canada.getDescription();      // "Canada is located in North America."
southAfrica.getDescription(); // "The Republic of South Africa is located in Africa."`
