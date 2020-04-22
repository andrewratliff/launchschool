// All cars start out not moving, and sedans
// can accelerate about 8 miles per hour per second (mph/s).

let makeCar = (acceleration_rate, break_rate) => {
  return {
    speed: 0,
    acceleration_rate: acceleration_rate,
    break_rate: break_rate,
    accelerate() {
      this.speed += this.acceleration_rate;
      this.logSpeed();
    },
    break() {
      this.speed = Math.max(this.speed - this.break_rate, 0);
      this.logSpeed();
    },
    logSpeed() {
      console.log(`Current speed: ${this.speed}`);
    }
  }
};

let sedan = makeCar(8, 6);
let hatchBack = makeCar(9, 6);
