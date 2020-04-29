function invoiceTotal(invoices) {
  return invoices.reduce((total, invoice) => {
    return total += invoice.total();
  }, 0);
}
function createInvoice(services) {
  services = services || {};

  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],
    total() {
      return this.phone + this.internet;
    },
    addPayment(payment) {
      this.payments.push(payment);
    },
    addPayments(payments) {
      payments.forEach(payment => {
        this.addPayment(payment);
      }, this)
    },
    amountDue() {
      return this.total() - paymentTotal(this.payments);
    }
  };
}

// var invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({
//   internet: 6500,
// }));

// invoices.push(createInvoice({
//   phone: 2000,
// }));

// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices));             // => 31000

function paymentTotal(payments) {
  return payments.reduce((total, payment) => {
    return total += payment.total();
  }, 0);
}

function createPayment(services) {
  services = services ||  {};

  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount || 0,
    total() {
      return this.phone + this.internet + this.amount;
    },
  };
}

// var payments = [];
// payments.push(createPayment());
// payments.push(createPayment({
//   internet: 6500,
// }));

// payments.push(createPayment({
//   phone: 2000,
// }));

// payments.push(createPayment({
//   phone: 1000,
//   internet: 4500,
// }));

// payments.push(createPayment({
//   amount: 10000,
// }));

// console.log(paymentTotal(payments));      // => 24000

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
invoice.amountDue();       // this should return 0
