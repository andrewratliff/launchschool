function makeBank() {
  function makeAccount(number) {
    const transactions = [];
    let balance = 0;

    return {
      deposit(amount) {
        balance += amount;
        transactions.push({type: 'deposit', amount: amount});
        return amount;
      },
      withdraw(amount) {
        if (amount > balance) {
          amount = balance;
        }

        transactions.push({type: 'withdraw', amount: amount});
        balance -= amount;
        return amount;
      },
      balance() {
        return balance;
      },
      number() {
        return number;
      },
      transactions() {
        return transactions;
      },
    }
  }

  const accounts = [];
  let nextAccountNumber = 101;

  return {
    openAccount() {
      let newAccount = makeAccount(nextAccountNumber);
      nextAccountNumber += 1;
      accounts.push(newAccount);
      return newAccount;
    },
    transfer(source, destination, amount) {
      amount = source.withdraw(amount);
      destination.deposit(amount);

      return amount;
    },
  };
}

const bank = makeBank();
const account = bank.openAccount();
