// var scissorsId = 0;
// var scissorsName = 'Scissors';
// var scissorsStock = 8;
// var scissorsPrice = 10;

// var drillId = 1;
// var drillName = 'Cordless Drill';
// var drillStock = 15;
// var drillPrice = 45;

// let scissors = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,
// };

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,
// };

// let setPrice = (item, price) => {
//   if (price < 0) {
//     console.log('Item price can\'t be negative');
//     return;
//   }

//   item.price = price;
// };

// let describeProduct = item => {
//   console.log(`Name: ${item.name}`);
//   console.log(`ID: ${item.id}`);
//   console.log(`Price: $${item.price}`);
//   console.log(`Stock: ${item.stock}`);
// };

let makeItem = (id, name, stock, price) => {
  return {
    id: id,
    name: name,
    stock: stock,
    price: price,
    setPrice(price) {
      this.price = price;
    },
    describeProduct() {
      console.log(`Name: ${this.name}`);
      console.log(`ID: ${this.id}`);
      console.log(`Price: $${this.price}`);
      console.log(`Stock: ${this.stock}`);
    }
  }
};

let scissors = makeItem(0, 'Scissors', 8, 10);
let drill = makeItem(1, 'Cordless Drill', 15, 45);
