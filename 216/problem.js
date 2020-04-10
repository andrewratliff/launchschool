// Your task is to determine how many files of the copy queue you will be able
// to save into your Hard Disk Drive. The files must be saved in the order they
// appear in the queue.
//
// Input:

//     Array of file sizes (0 <= s <= 100)
//     Capacity of the HD (0 <= c <= 500)

// Output:

//     Number of files that can be fully saved in the HD.

// Examples:

// save([4,4,4,3,3], 12) -> 3
// # 4+4+4 <= 12, but 4+4+4+3 > 12
// save([4,4,4,3,3], 11) -> 2
// # 4+4 <= 11, but 4+4+4 > 11

// Do not expect any negative or invalid inputs.
//
// Problem:
// Create a function that takes two parameters
//  - array of numbers (file sizes)
//  - number (HD capacity)
//  number -> Current hard drive size
//
//  Loop through all the file sizes
//  Add each file size to the current hard drive size
//  When the current size go over the capacity, return the number of files that
//  were added
//
// Examples:

// Data Structures:
// passed in array
// size of the hard drive
// array of saved files
//
// Algorithm:
// - iterate through files
//   - remaining = file size - size
//   - if remaining < 0
//      - return the length of saved files
//   - else
//     - push current file to the save files

let save = (files, size) => {
  let counter = 0;

  for (let i = 0; i < files.length; i += 1) {
    size -= files[i];

    if (size < 0) {
      break;
    } else {
      counter += 1;
    }
  }

  return counter;
};

console.log(save([4, 4, 4, 3, 3], 12)); // 3
console.log(save([4, 4, 4, 3, 3], 11)); // 2
console.log(save([], 1));               // 0
console.log(save([1, 2], 0));           // 0
