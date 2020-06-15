// setTimeout(function() {
//   console.log("!");
// }, 3000)
// setTimeout(function() {
//   console.log("World");
// }, 1000)
// console.log("Hello");

// 1
// function delayLog() {
//   for (let i = 1; i <= 10; i += 1) {
//     setTimeout(function() {
//       console.log(i);
//     }, i * 1000);
//   };
// }

// delayLog();

// 2
// setTimeout(function() {   // 1
//   console.log('Once');    // 5
// }, 1000);

// setTimeout(function() {   // 2
//   console.log('upon');    // 7
// }, 3000);

// setTimeout(function() {   // 3
//   console.log('a');       // 6
// }, 2000);

// setTimeout(function() {   // 4
//   console.log('time');    // 8
// }, 4000);

// 3
// g, f, d, z, n, s. q

// 4
function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}

function logger() {
  console.log('hi');
}

afterNSeconds(logger, 5);
