const invoices = {
  unpaid: [],
  paid: [],
  add(clientName, amountOwed) {
    this.unpaid.push({
      name: clientName,
      amount: amountOwed,
    })
  },
  totalDue() {
    return this.unpaid.reduce(function(total, invoice) {
      total += invoice.amount;
      return total;
    }, 0)
  },
  payInvoice(clientName) {
    let unpaid = [];

    this.unpaid.forEach(invoice => {
      if (invoice.name === clientName) {
        this.paid.push(invoice);
      } else {
        unpaid.push(invoice);
      }
    });

    this.unpaid = unpaid;
  },
  totalPaid() {
    return this.paid.reduce((total, invoice) => {
      total += invoice.amount;
      return total;
    }, 0);
  },
}

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
