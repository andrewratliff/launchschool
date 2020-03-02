let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = []

// while loop example:
// let index = 0;

// while (index < names.length) {
//   let upperCaseName = names[index].toUpperCase();
//   upperNames.push(upperCaseName);
//   index += 1;
// };

// console.log(upperNames);

// for loop example:
// for (let index = 0; index < names.length; index += 1) {
//   let upperCaseName = names[index].toUpperCase();
//   upperNames.push(upperCaseName);
// }

// console.log(upperNames);

// for loop example (with control keywords):

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') {
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
};

console.log(upperNames);
