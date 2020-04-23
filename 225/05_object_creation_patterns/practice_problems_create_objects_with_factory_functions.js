// 01 What are the two disadvantages of working with factory functions?
// 1. Every object created with a factory has copy of all the methods, which is
// redundant.
// 2. We have no way to tell if an object created by a factory is of a certain
// type.

// 02
function makeObj() {
  var obj = {};
  obj.propA = 10;
  obj.propB = 20;
  return obj;
}

function makeObj() {
  return {
    propA: 10,
    propB: 20,
  };
}

// 03
// var invoice = {
//   phone: 3000,
//   internet: 6500,
// };
// var payment = {
//   phone: 1300,
//   internet: 5500,
// };
// var invoiceTotal = invoice.phone + invoice.internet;
// var paymentTotal = payment.phone + payment.internet;
// var remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700

function createInvoice(services) {
  services = services || {};
  let payments = [];

  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    total() {
      return this.phone + this.internet;
    },
    addPayment(payment) {
      payments.push(payment);
    },
    addPayments(payments) {
      payments.forEach(this.addPayment);
    },
    paymentTotal() {
      return payments.reduce((sum, payment) => sum += payment.total(), 0);
    },
    amountDue() {
      return this.total() - this.paymentTotal();
    },
  };
}

function invoiceTotal(invoices) {
  var total = 0;

  for (let i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  };

  return total;
}

var invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));


function createPayment(services) {
  services = services || {};

  return {
    internet: services.internet || 0,
    phone: services.phone || 0,
    amount: services.amount,
    total() {
      return this.amount || this.internet + this.phone;
    },
  };
}

function paymentTotal(payments) {
  let total = 0;

  for (let i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  };

  return total;
}

var payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

var invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

var payment1 = createPayment({
  amount: 2000,
});

var payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

var payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
// console.log(invoice.amountDue());       // this should return 0
