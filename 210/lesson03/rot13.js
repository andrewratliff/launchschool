let rot13 = (string) => {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    result += rotateChar(string[i]);
  }

  return result;
};

let rotateChar = (char) => {
  if (!(/[a-zA-Z]/).test(char)) return char;

  const CHAR_CODE = char.charCodeAt(0);
  const LOWER_START = 97;
  const LOWER_END = 122;
  const ROTATION_AMOUNT = 13;
  const UPPER_START = 65;
  const UPPER_END = 90;

  let rotatedCharCode = CHAR_CODE + ROTATION_AMOUNT;

  if (isBetween(CHAR_CODE, LOWER_START, LOWER_END) && rotatedCharCode > LOWER_END) {
    rotatedCharCode = calculateRotatedChar(rotatedCharCode, LOWER_START, LOWER_END);
  } else if (isBetween(CHAR_CODE, UPPER_START, UPPER_END) && rotatedCharCode > UPPER_END) {
    rotatedCharCode = calculateRotatedChar(rotatedCharCode, UPPER_START, UPPER_END);
  }

  return String.fromCharCode(rotatedCharCode);
};

let isBetween = (number, start, end) => {
  return (number >= start && number <= end);
};

let calculateRotatedChar = (charCode, start, end) => {
  return start + (charCode - end) - 1;
};

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
