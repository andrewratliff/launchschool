// function say(words = 'hello') {
//   console.log(words + '!');
// }

// say('hi');
// say('hello, how are you');
// say();

// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3));

// let greetingMessage = 'Good Morning';

// function greetPeople() {
//   console.log(greetingMessage);
// }

// function changeGreetingMessage(newMessage) {
//   greetingMessage = newMessage;
// }

// changeGreetingMessage('Good Ebening');
// greetPeople();

// function greetPeople(greetingMessage) {
//   console.log(greetingMessage);
// }

// greetPeople('Good Morning');

// let name = "Andrew Ratliff";

// console.log(name.toUpperCase());
// console.log(name);

// let oddNumbers = [1, 3, 5, 7, 9];
// oddNumbers.pop();
// console.log(oddNumbers);

// Mutating the caller
// function changeFirstElement(array) {
//   array[0] = 9;
// }

// let oneToFive = [1, 2, 3, 4, 5];
// changeFirstElement(oneToFive);
// console.log(oneToFive);

// function addToArray(array) {
//   return array.concat(0);
// }

// let oneToFive = [1, 2, 3, 4, 5];
// console.log(addToArray(oneToFive));
// console.log(oneToFive);

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// let sum = add(20, 45);
// console.log(sum);

// let difference = subtract(80, 10);
// console.log(difference);

// console.log(add(20, 45));

// function times(num1, num2) {
//   return num1 * num2;
// }

// console.log(times(add(20, 45), subtract(80, 10)));

let greetPeople = () => {
  console.log('Good Morning');
};

console.log(greetPeople());
