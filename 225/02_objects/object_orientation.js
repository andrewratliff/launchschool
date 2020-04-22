let makeVehicle = (fuel, mpg) => {
  return {
    fuel: fuel,
    mpg: mpg,
    range() {
      return this.fuel * this.mpg;
    },
  }
}

let smallCar = makeVehicle(7.9, 37);
