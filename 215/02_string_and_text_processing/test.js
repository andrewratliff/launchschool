let foo = list => {
  return list.
    map(word => word.match(/[aeiou]/i) || []).
    reduce((acc, letterList) => acc + letterList.length, 0);
}

console.log(foo(['cart', 'truck', 'cart', 'train']));
console.log(foo(['apple', 'banana', 'orange']));
console.log(foo(['a', 'b', 'c']));
console.log(foo(['a', 'e', 'i', 'o', 'u']));
