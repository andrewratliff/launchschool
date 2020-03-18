// let count = [1, 2, 3, 4, 5];
// let doubled = count.map((number, index, array) => number * 2);
// console.log(doubled);

// let myMap = (array, func) => {
//   let result = [];
//   array.forEach(element => result.push(func(element)));
//   return result;
// };

// let plusOne = n => n + 1;
// console.log(myMap([1, 2, 3, 4], plusOne));

let getBooksTitle = books => books.map(getTitle);

let books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

let getTitle = book => book['title'];

console.log(getBooksTitle(books));
