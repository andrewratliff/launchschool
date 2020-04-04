// Problem Description:
//
// Implement encoding and decoding for the rail fence cipher.
//
// The Rail Fence cipher is a form of transposition cipher that gets its name
// from the way in which it's encoded. It was already used by the ancient Greeks.
//
// In the Rail Fence cipher, the message is written downwards on successive
// "rails" of an imaginary fence, then moving up when we get to the bottom (like
// a zig-zag). Finally the message is then read off in rows.

// For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT
// ONCE", the cipherer writes out:

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .

// Then reads off:

// WECRLTEERDSOEEFEAOCAIVDEN

// To decrypt a message you take the zig-zag shape and fill the ciphertext along
// the rows.

// ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

// The first row has seven spots that can be filled with "WECRLTE".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

// Now the 2nd row takes "ERDSOEEFEAOC".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

// Leaving "AIVDEN" for the last row.

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .

// If you now read along the zig-zag shape you can read the original message.
//
// Convert the string message into an array of upcase chars
// iterate through the array of chars
//   - have a rail counter that keeps track of the rail to put the char in
//   if result[rail_counter] === current
//   - push the char onto the array[rail_counter]
//   else
//   - push '.'
//   - increase rail counter by 1
//   - if rail counter is === number passed in, reset rail counter to zero
//
//   [[], []. []]
//
// Algorithm:
// - convert message to msgArray
// - rail_index = 0
// - result = array with rails number of arrays inside
// - iterate through msgArray
//   - iterate through result
//     - if result.indexOf(current_element) === rails index
//        - insert current_char
//     - else
//       - insert .
//     - increment rail_index by 1
//     - if rail_index === rails -> set rail_index to 0
//
// [h, e, l, l, o, w, o, r, l, d]
// [[], [], []]
// rails_index = 0
//
// h

let createMatrix

let railties = (message, rails) => {
  let chars = message.replace(/\s/g, '').split('').map(char => char.toUpperCase());
  let result = [...Array(rails)].map(() => []);
  let rail_index = 0;
  let increasing = true;

  chars.forEach(char => {
    result.forEach(rail => {
      if (rail === result[rail_index]) {
        rail.push(char);
      } else {
        rail.push('.');
      }
    });

    if (increasing) {
      rail_index += 1;

      if (rail_index === rails) {
        rail_index -= 2;
        increasing = false;
      }
    } else {
      rail_index -= 1;

      if (rail_index === 0) {
        increasing = true;
      }
    }
  });

  result.forEach(rail => console.log(rail));

  console.log('---------');

  console.log(result.map(rail => rail.join('').replace(/\./g, '')).join(''));
}

railties('hello world', 3);
railties('WE ARE DISCOVERED FLEE AT ONCE', 3);
