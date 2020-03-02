let name = 'Bob';
let saveName = name;
name = 'Alice';

console.log(name, saveName);

name = 'Bob';
saveName = name;
name.toUpperCase();
console.log(name, saveName);
