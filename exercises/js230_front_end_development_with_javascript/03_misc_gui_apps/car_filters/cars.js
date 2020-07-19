document.addEventListener('DOMContentLoaded', () => {
  Handlebars.registerPartial('car_partial', document.getElementById('car_partial').innerHTML);
  const cars = [
    { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
    { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
    { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
    { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
    { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
    { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
    { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
  ];

  displayFilters();
  displayCars(cars);

  document.querySelector('.filter_btn').addEventListener('click', () => {
    const make = document.getElementById('make_select').value;
    const model = document.getElementById('model_select').value;
    const price = document.getElementById('price_select').value;
    const year = document.getElementById('year_select').value;

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

    displayCars(filteredCars);
  });

  function displayFilters() {
    const filtersTemplateSource = document.getElementById('filters_template');
    const filtersTemplate = Handlebars.compile(filtersTemplateSource.innerHTML);
    const filters = {
      makes: new Set(cars.map(car => car.make)),
      models: new Set(cars.map(car => car.model)),
      prices: new Set(cars.map(car => car.year)),
      years: new Set(cars.map(car => car.price)),
    }

    document.getElementById('filters').innerHTML = filtersTemplate(filters);
  }

  function displayCars(filteredCars) {
    const carsTemplateSource = document.getElementById('cars_template');
    const carsTemplate = Handlebars.compile(carsTemplateSource.innerHTML);

    document.getElementById('cars').innerHTML = carsTemplate({ cars: filteredCars });
  }
});
