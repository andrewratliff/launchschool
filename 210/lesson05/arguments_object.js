function sum(...args) {
  return args.reduce((sum, el) => sum += el, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2));
