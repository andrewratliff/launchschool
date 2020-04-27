function makeAccount(number) {
  const transactions = [];
  let balance = 0;
  return {
    number() {
      return number;
    },
    transactions() {
      return transactions;
    },
    balance() {
      return balance;
    },
    deposit(amount) {
      transactions.push({ type: 'deposit', amount: amount });
      balance += amount;
      return amount;
    },
    withdraw(amount) {
      if (amount > balance) {
        amount = balance;
      }

      transactions.push({ type: 'withdrawal', amount: amount });
      balance -= amount;
      return amount;
    }
  }
}

function makeBank() {
  let account = [];
  let nextId = 101;

  function getNextId() {
    const id = nextId;
    nextId += 1;
    return id;
  }

  return {
    openAccount() {
      const account = makeAccount(getNextId());
      accounts.push(account);
      return account;
    },
    transfer(source, destination, amount) {
      amount = source.withdraw(amount);
      destination.deposit(amount);
    }
  }
}

const bank = makeBank();
const account = bank.openAccount();
const source = bank.openAccount();
const destination = bank.openAccount();
