// 1 Hello Friends!
// function randomGreeting() {
//   var words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
//                'Greetings', 'Salutations', 'Good to see you'];

//   var idx = Math.floor(Math.random() * words.length);

//   return words[idx]; // add return since it otherwise returns undefined
// }

// function greet() {
//   var names = Array.prototype.slice.call(arguments);
//   var i;

//   for (i = 0; i < names.length; i++) {
//     var name = names[i];
//     var greeting = randomGreeting(); // call the function otherwise it returns the function definition

//     console.log(greeting + ', ' + name + '!');
//   }
// }

// greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');

// 2 Includes False
// function includesFalse(list) {
//   var i;
//   var element;

//   for (i = 0; i < list.length; i++) {
//     element = list[i];

//     if (element === false) {
//       return true;
//     }
//   }

//   return false;
// }
//                                                                   // returns:
// console.log(includesFalse([8, null, 'abc', true, 'launch', 11, false]));       // true
// console.log(includesFalse(['programming', undefined, 37, 64, true, 'false'])); // false
// console.log(includesFalse([9422, 'lambda', true, 0, '54', null]));             // true

// 3 Place A Bet
// function placeABet(guess) {
//   // with parens around a fucntion definition, it is out of scope
//   function generateRandomInt() {
//     return Math.floor(Math.random() * 25) + 1;
//   };

//   var winningNumber = generateRandomInt();

//   if (guess < 1 || guess > 25) {
//     return 'Invalid guess. Valid guesses are between 1 and 25.';
//   }

//   if (guess === winningNumber) {
//     return "Congratulations, you win!";
//   } else {
//     return "Wrong-o! You lose.";
//   }
// }

// var userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
// alert(placeABet(userGuess));

// 4 Picky Museum Filter
// function wantToVisit(museum, city) {
//   return museum.includes('Computer')
//     || museum.includes('Science')
//     || (museum.includes('Modern')
//       && museum.includes('Art')
//       && (museum.includes('Andy Warhol')
//         || city === 'Amsterdam'));
// }

// // Tests (should all print 'true')

// console.log(wantToVisit('Computer Games Museum', 'Berlin') === true);
// console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
// console.log(wantToVisit('Museum of Modern Art', 'New York') === false);
// console.log(wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
// console.log(wantToVisit('NEMO Science Museum', 'Amsterdam') === true);
// console.log(wantToVisit('National Museum of Modern Art', 'Paris') === false);
// console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true);
// console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true);
// console.log(wantToVisit('Van Gogh Museum', 'Amsterdam') === false);

// 5 Pomodoro
// var tasks = 10;
// var checkmarks = 0;
// var sessions = 0;
// var minutes = 0;

// function pomodoro() {
//   console.log('Work.');

//   while (minutes < 25) {
//     minutes += 1;
//     console.log('...' + minutes);
//   }

//   console.log('PLING!');

//   sessions += 1;
//   checkmarks += 1;

//   if (checkmarks === tasks) {
//     console.log('Done!');
//     return;
//   }

//   var rest;
//   if (sessions === 4) {
//     sessions = 0;
//     rest = 30;
//   } else {
//     rest = 5;
//   }

//   console.log('Rest for ' + rest + ' minutes.');

//   minutes = 0;
//   pomodoro();
// }

// pomodoro();

// 6 Shop Transactions
// var transactionLog = [];

// function processInput(input) {
//   var numericalData = parseFloat(input);

//   if (isNaN(numericalData)) {
//     throw (new Error('Data could not be converted to numerical amount.'));
//   }

//   return numericalData;
// }

// function logTransaction() {
//   var data = prompt('Please enter the transaction amount: ');

//   try {
//     data = processInput(data);
//     transactionLog.push(data);

//     alert('Thank you. Data accepted.');
//   } catch(error) {
//     alert(error.message);
//   }
// }

// function transactionTotal() {
//   var total = 0;
//   var i;

//   for (i = 0; i < transactionLog.length; i++) {
//     total += transactionLog[i];
//   }

//   return total;
// }

// logTransaction();
// logTransaction();
// logTransaction();

// console.log(transactionTotal());

// 7 Full Moon
// var species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
// var isMidnight = true;
// var isFullmoon = true;

// function isTransformable(species) {
//   return species[0] === 'w';
// }

// function transform(species) {
//   return 'were' + species;
// }

// var i;
// for (i = 0; i < species.length; i++) {
//   var thisSpecies = species[i];
//   let newSpecies;

//   console.log('This species: ' + thisSpecies);
//   console.log('New species: ' + newSpecies);

//   if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
//       newSpecies = transform(thisSpecies);
//   }

//   if (newSpecies) {
//     console.log('Beware of the ' + newSpecies + '!');
//   }
// }

// 8 Space Design
// Roles (salary still to be determined)

// var ceo = {
//   tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
//   salary: 0,
// };

// var developer = {
//   tasks: ['turn product vision into code'],
//   salary: 0,
// };

// var scrumMaster = {
//   tasks: ['organize scrum process', 'manage scrum teams'],
//   salary: 0,
// };

// // Team -- we're hiring!

// var team = {};

// team.ceo = 'Kim';
// team.scrumMaster = 'Alice';
// team.developer = undefined;

// var company = {
//   name: 'Space Design',
//   team: team,
//   projectedRevenue: 500000,
// };


// console.log('----{ ' + company.name + ' }----');
// console.log('CEO: ' + company.team.ceo);
// console.log('Scrum master: ' + company.team.scrumMaster);
// console.log('Projected revenue: $' + company.projectedRevenue);

// // ----{ Space Design }----
// // CEO: undefined
// // Scrum master: undefined
// // Projected revenue: $500000

// 9 Expensive Study Preparation
// The shopping cart is a list of items, where each item
// is an object { name: <string>, amount: <number> }.
// var shoppingCart = [];

// // Currently available products with prices.
// var prices = {
//   'notebook': 9.99,
//   'pencil': 1.70,
//   'coffee': 3.00,
//   'smoothie': 2.10,
// };

// function price(item) {
//   return prices[item.name];
// }

// // Adding an item to the shopping cart.
// // The amount is optional and defaults to 1.
// // If the item is already in the cart, its amount is updated.
// function updateCart(name, amount) {
//   amount = amount || 1;

//   var i;
//   var item;
//   var alreadyInCart = false;

//   for (i = 0; i < shoppingCart.length; i += 1) {
//     item = shoppingCart[i];

//     if (item.name === name) {
//       item.amount = amount;
//       alreadyInCart = true;
//       break;
//     }
//   }

//   if (!alreadyInCart) {
//     shoppingCart.push({ name: name, amount: amount });
//   }
// }

// // Calculating the price for the whole shopping cart.
// function total() {
//   var total = 0;
//   var i;

//   for (i = 0; i < shoppingCart.length; i += 1) {
//     var item = shoppingCart[i];

//     total += (item.amount * price(item));
//   }

//   return total.toFixed(2);
// }

// function pay() {
//   // omitted

//   console.log('You have been charged $' + total() + '.');
// }

// function checkout() {
//   pay();
//   shoppingCart = {};
// }

// // Example purchase.

// updateCart('notebook');
// updateCart('pencil', 2);
// updateCart('coffee', 1);
// // "Oh, wait, I do have pencils..."
// updateCart('pencil', 0);

// checkout();
// // You have been charged $14.69.

// 10 Stuck on Page 18
var totalPages = 364;
var energy = 100;
var currentPage = 1;

function read() {
  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log('Made it to page ' + String(currentPage) + '.');

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();
