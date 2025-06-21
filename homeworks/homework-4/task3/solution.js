/**### **Task 3: Object Property Getters and Setters**
 *
 * */

export class Task3 {
    constructor() {
        this.bankAccount = null;
    }

    /** 1. Create the bankAccount object with a default balance property */
    createBankAccount(initialBalance = 1000) {
        this.bankAccount = { balance: initialBalance };
    }

    /** 2. Add a getter for formattedBalance that returns the balance with a currency symbol */
    addFormattedBalanceGetter() {
        Object.defineProperty(this.bankAccount, "formattedBalance", {
            get() {
                return "$" + this.balance;
            },
            enumerable: true,
            configurable: true,
        });
    }

    /** 3. Add a setter for balance that updates the balance and formattedBalance */
    addBalanceSetter() {
        Object.defineProperty(this.bankAccount, "setBalance", {
            set: function (val) {
                this.balance = val;
            },
        });
    }

    /** 4. Implement the transfer method */
    addTransferMethod() {
        Object.defineProperty(this.bankAccount, "transfer", {
            value: function (senderAcc, receiverAcc, amount) {
                senderAcc.setBalance = senderAcc.balance - amount;
                receiverAcc.setBalance = receiverAcc.balance + amount;
            },
            writable: false,
            enumerable: true,
            configurable: true,
        });
    }

    getBankAccount() {
        return this.bankAccount;
    }

    /** Helper to clone the bankAccount structure for demo */
    static cloneBankAccount(account) {
        const clone = { balance: account.balance };
        Object.defineProperty(clone, 'formattedBalance', Object.getOwnPropertyDescriptor(account, 'formattedBalance'));
        Object.defineProperty(clone, 'setBalance', Object.getOwnPropertyDescriptor(account, 'setBalance'));
        return clone;
    }
}
