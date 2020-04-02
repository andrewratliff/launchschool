// Problem Description:
// Write a program that cleans up user-entered phone numbers so that they can be
// sent as SMS messages. Other than digits, the number may also contain special
// characters such as spaces, dash, dot, and parentheses that should be ignored.
//
// Rules:
// - If the phone number is less than 10 digits, assume that it is a bad number.
// - If the phone number is 10 digits, assume that it is good.
// - If the phone number is 11 digits and the first numebr is 1, trim the 1 and
//   use that last 10 digits.
// - If the number number is 11 digits and the first number i not 1, then it is
//   a bad number
// - If the phone number is more than 11 digits, assume it is a bad number
//
// For bad numbers, just return a string of ten 0's

// input: string
// output: string

// Data structures:
// string input, can use string for the entire solution
//
// Algo
// - remove all non digits from the input
// - check the length of the string
// - return '0000000000' if the length is < 10 or if the length is > 11
// - if the length is 10 return the string
// - if the length is 11 and the first digits is 1, return from index 1 to the
//   end
// - if the length is 11 and the first digit is not 1, return 0000000000

let cleanPhoneNumber = string => {
  const DEFAULT = '0'.repeat(10);

  if (typeof string !== 'string') return DEFAULT;

  let cleanString = string.replace(/\D/g, '');
  let length = cleanString.length;

  if (length === 11 && cleanString.charAt(0) === '1') {
    return cleanString.slice(1);
  } else if (length === 10) {
    return cleanString;
  }

  return DEFAULT;
};

// examples:
console.log(cleanPhoneNumber([]))                 // '0000000000'
console.log(cleanPhoneNumber(''))                 // '0000000000'
console.log(cleanPhoneNumber('1'))                // '0000000000'
console.log(cleanPhoneNumber('1111111111'))       // '1111111111'
console.log(cleanPhoneNumber('11234567890'))      // '1234567890'
console.log(cleanPhoneNumber('21234567890'))      // '0000000000'
console.log(cleanPhoneNumber('121234567890'))     // '0000000000'
console.log(cleanPhoneNumber('111-111-1111'))     // '1111111111'
console.log(cleanPhoneNumber('1.111.111.1111'))   // '1111111111'
console.log(cleanPhoneNumber('1.111.111.1111'))   // '1111111111'
