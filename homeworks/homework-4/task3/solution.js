/**### **Task 3: Object Property Getters and Setters**

/** Create an object called bankAccount with the following properties and values:
`balance: 1000 (default value)`
*/
const bankAccount = {
    balance: 1000
}
// console.log(Object.getOwnPropertyDescriptors(bankAccount));

/** Use a getter to define a property called `formattedBalance`, which returns the balance with a 
 *  currency symbol (e.g., "$1000").
*/
Object.defineProperty(bankAccount, 'formattedBalance',{
    get(){
        return '$',this.balance;
    },
    enumerable:true,
    configurable:true
});
// console.log(bankAccount.formattedBalance)
/** Use a setter to define a property called `balance`, which updates the account balance and automatically updates the corresponding 
    `formattedBalance` value.
*/
Object.defineProperty(bankAccount, 'setBalance', {
    set(val){
        bankAccount.balance = val;
    }
})
bankAccount.setBalance = 2000
console.log(bankAccount.formattedBalance)
/**Implement a method called `transfer` on the `bankAccount` object that takes two `bankAccount` objects and an amount as arguments. 
    The method should transfer the specified amount from the current account to the target account. Ensure that the `balance` and 
    `formattedBalance` properties of both accounts are updated correctly. */


