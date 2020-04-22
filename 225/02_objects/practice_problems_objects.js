// 1
let invoices = {
  unpaid: [],
  paid: [],
  add(name, amount) {
    this.unpaid.push({
      name: name,
      amount: amount,
    });
  },
  totalDue() {
    return this.unpaid.reduce((sum, invoice) => sum += invoice.amount, 0);
  },
  payInvoice(client) {
    let unpaid = [];

    this.unpaid.forEach(invoice => {
      if (invoice.name === client) {
        this.paid.push(invoice);
      } else {
        unpaid.push(invoice);
      }
    });

    this.unpaid = unpaid;
  },
  totalPaid() {
    return this.paid.reduce((sum, invoice) => sum += invoice.amount, 0);
  }
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
console.log(invoices.totalDue());
