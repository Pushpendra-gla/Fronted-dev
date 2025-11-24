// Q7 Banking
class BankAccount{
  #balance=0;
  deposit(a){this.#balance+=a;}
  withdraw(a){
    if(a>this.#balance) throw new Error("Insufficient balance");
    this.#balance-=a;
  }
  getBalance(){return this.#balance;}
}
const acc=new BankAccount();
acc.deposit(5000);
console.log(acc.getBalance());
try{acc.withdraw(10000);}catch(e){console.error(e.message);}
