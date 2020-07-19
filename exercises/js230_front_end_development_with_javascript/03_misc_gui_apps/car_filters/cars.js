(function () {
  const cars = [
    { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
    { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
    { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
    { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
    { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
    { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
    { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
  ];

  class App {
    constructor() {
      this.resetFilters(cars);
      this.displayCars(cars);
      this.bindFilterEvent();
      document.getElementById('reset_btn').addEventListener('click', () => {
        new App();
      })
    }

    bindFilterEvent() {
      document.querySelector('.filter_btn').addEventListener('click', () => {
        const make = document.getElementById('make_select').value;
        const model = document.getElementById('model_select').value;
        const price = parseInt(document.getElementById('price_select').value, 10);
        const year = parseInt(document.getElementById('year_select').value, 10);

        const filters = {};

        if (make) {
          filters.make = make;
        }

        if (model) {
          filters.model = model;
        }

        if (price) {
          filters.price = price;
        }

        if (year) {
          filters.year= year;
        }

        const filteredCars = cars.filter(car => {
          return Object.keys(filters).every(key => {
            return filters[key] === car[key];
          })
        })

        this.displayCars(filteredCars);
        this.updateFilters(filteredCars);
      });
    }

    updateFilters(filteredCars) {

    }

    resetFilters(filteredCars) {
      const filtersTemplateSource = document.getElementById('filters_template');
      const filtersTemplate = Handlebars.compile(filtersTemplateSource.innerHTML);
      const filters = {
        makes: new Set(filteredCars.map(car => car.make)),
        models: new Set(filteredCars.map(car => car.model)),
        prices: new Set(filteredCars.map(car => car.price)),
        years: new Set(filteredCars.map(car => car.year)),
      }

      document.getElementById('filters').innerHTML = filtersTemplate(filters);
    }

    displayCars(filteredCars) {
      const carsTemplateSource = document.getElementById('cars_template');
      const carsTemplate = Handlebars.compile(carsTemplateSource.innerHTML);

      document.getElementById('cars').innerHTML = carsTemplate({ cars: filteredCars });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    Handlebars.registerPartial('car_partial', document.getElementById('car_partial').innerHTML);

    new App();
  });
})();
