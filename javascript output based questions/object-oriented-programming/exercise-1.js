class BankAccount {
  constructor(accNumber, accHolder, balance = 0) {
    this.accNumber = accNumber;
    this.accHolder = accHolder;
    this.balance = balance;
  }

  deposit(amt) {
    if (amt > 0) {
      this.balance += amt;
      console.log(`Deposited $${amt}. New Balance: $${this.balance}`);
    } else {
      console.log("Can't deposit a negative amount");
    }
  }

  withdraw(amt) {
    if (amt > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amt;
      console.log(`Withdrawn $${amt}. New Balance: $${this.balance}`);
    }
  }
}

const acc1 = new BankAccount(12345, "Kedar");
console.log(acc1);
acc1.deposit(200);
acc1.withdraw(300);
acc1.withdraw(50);
console.log(acc1.balance);
