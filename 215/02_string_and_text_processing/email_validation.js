let isValidEmail = email => {
  if (!email.includes('@')) return false;

  let [local, domain] = email.split('@');

  if (!validLocal(local)) return false;
  if (!validDomain(domain)) return false;

  return true;
}

let validLocal = str => str.length > 0 && /^[a-z0-9]/i.test(str);

let validDomain = str => {
  if (!str.includes('.')) return false;
  if (str.length < 1 || /[^a-z]/i.test(str)) return false;

  let [first, second] = str.split('.');

  return true;
};

// LS solution
// function isValidEmail(email) {
//   return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);
// }

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false
