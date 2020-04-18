const temperatures = [53, 86, 12, 43];

function average() {
  let total = 0;

  for(let i = this.length - 1; i >= 0; i -= 1) {
    total += this[i];
  }

  return total / this.length;
};

console.log(average(temperatures));
console.log(average.call(temperatures));
console.log(average.apply(temperatures));

const averageTemperature = average.bind(temperatures);

console.log(averageTemperature());
