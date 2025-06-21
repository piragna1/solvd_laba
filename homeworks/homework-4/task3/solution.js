/**### **Task 3: Object Property Getters and Setters**
 *
 * */

/** Create an object called bankAccount with the following properties and values:
`balance: 1000 (default value)`
*/
const bankAccount = {
  balance: 1000,
};
// console.log(Object.getOwnPropertyDescriptors(bankAccount));

/** Use a getter to define a property called `formattedBalance`, which returns the balance with a
 *  currency symbol (e.g., "$1000").
 */
Object.defineProperty(bankAccount, "formattedBalance", {
  get() {
    return "$" + this.balance;
  },
  enumerable: true,
  configurable: true,
});
// console.log(bankAccount.formattedBalance);

/** Use a setter to define a property called `balance`, which updates the account balance and automatically updates the corresponding 
    `formattedBalance` value.
*/
Object.defineProperty(bankAccount, "setBalance", {
  set: function (val) {
    this.balance = val;
  },
});
// bankAccount.setBalance = 200;
// console.log(bankAccount.formattedBalance); // 200

/**Implement a method called `transfer` on the `bankAccount` object that takes two `bankAccount` objects and an amount as arguments. 
    The method should transfer the specified amount from the current account to the target account. Ensure that the `balance` and 
    `formattedBalance` properties of both accounts are updated correctly. 
*/
Object.defineProperty(bankAccount, "transfer", {
  value: function (senderAcc, receiverAcc, amount) {
    senderAcc.setBalance = senderAcc.balance - amount;
    receiverAcc.setBalance= receiverAcc.balance + amount;
  },
  writable: false,
  enumerable: true,
  configurable: true,
});
// const bankAccount1={balance:200}
// Object.defineProperty(bankAccount1, 'formattedBalance', Object.getOwnPropertyDescriptor(bankAccount,'formattedBalance'));
// Object.defineProperty(bankAccount1, 'setBalance', Object.getOwnPropertyDescriptor(bankAccount,'setBalance'));
// bankAccount.transfer(bankAccount, bankAccount1,bankAccount.balance)
// console.log('Sender remaining balance:'+bankAccount.formattedBalance)
// console.log('Receiver remaining balance:'+bankAccount1.formattedBalance)