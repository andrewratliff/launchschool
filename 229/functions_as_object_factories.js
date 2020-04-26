function makeCar(accelerationRate, breakingRate) {
  return {
    speed: 0,
    accelerationRate: accelerationRate,
    breakingRate: breakingRate,
    accelerate() {
      this.speed += this.accelerationRate;
    },
    break() {
      if (this.speed <= this.breakingRate) {
        this.speed = 0;
      } else {
        this.speed -= this.breakingRate;
      }
    }
  };
}
const sedan = makeCar(8, 6);

function makeCountry(name, continent, visited = false) {
  return {
    name: name,
    continent: continent,
    visited: visited,
    getDescription: function() {
      let msg = `${name} is located in ${this.continent}.`
      let visit_msg = `I ${this.visited ? 'have' : "haven't"} visited ${name}.`
      console.log(msg + ' ' + visit_msg);
    },
    visitCountry() {
      this.visited = true;
    }
  };
}

var chile = makeCountry('The Republic of Chile', 'South America');
var canada = makeCountry('Canada', 'North America');
var southAfrica = makeCountry('The Republic of South Africa', 'Africa');

// chile.getDescription();       // "The Republic of Chile is located in South America."
// canada.getDescription();      // "Canada is located in North America."
// southAfrica.getDescription(); // "The Republic of South Africa is located in Africa."

function createProduct(id, name, stock, price) {
  return {
    id: id,
    name: name,
    stock: stock,
    price: price,
    setPrice(price) {
      if (typeof price !== 'number' || price < 0) {
        console.log('Invalid price');
        return;
      }

      this.price = price;
    },
    describeProduct() {
      console.log(`Name: ${this.name}`);
      console.log(`ID: ${this.id}`);
      console.log(`Price: $${this.price}`);
      console.log(`Stock: ${this.stock}`);
    },
  };
}

const scissors = createProduct(0, 'Scissors', 8, 10);

const drill = createProduct(1, 'Drill', 15, 45);
