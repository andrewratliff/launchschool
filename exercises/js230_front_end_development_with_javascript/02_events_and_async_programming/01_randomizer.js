// function randomizer(...callbacks) {
//   const MAX = callbacks.length * 2;

//   for (let i = 1; i <= MAX; i += 1) {
//     setTimeout(console.log, i * 1000, i);
//   };

//   callbacks.forEach(callback => {
//     setTimeout(callback, getRandomSeconds(MAX));
//   });
// }

function getRandomSeconds(max) {
  min = 1;
  max = Math.floor(max);
  return 1000 * (Math.floor(Math.random() * (max - min + 1)) + min);
}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}


// Ian Evans solution:

// function randomizer(...callbacks) {
//   let elapsed = 0;
//   const MAX = callbacks.length * 2;
//   const timeouts = {};

//   callbacks.forEach(callback => {
//     const id = setTimeout(function() {
//       callback();
//       timeouts[id] = 'cleared';
//     }, getRandomSeconds(MAX));

//     timeouts[id] = 'waiting';
//   });

//   let timer = setInterval(function() {
//     elapsed += 1;

//     const allClear = Object.values(timeouts).every(value => {
//       return value === 'cleared'
//     });

//     allClear ? clearInterval(timer) : console.log(elapsed);
//   }, 1000);
// }
