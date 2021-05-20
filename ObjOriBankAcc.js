/*
Object Oriented Bank Accounts
Below, you have a stubbed out BankAccount class, and you also have two subclasses that need to inherit from that BankAccount class: CheckingAccount and SavingsAccount. Please implement the following functionality to pass the tests!

BankAccount
Given the BankAccount class below, implement its stubbed out methods.

CheckingAccount
Do the same for CheckingAccount as you did for BankAccount, but add a little more functionality specific to checking accounts. Checking accounts are penalized when they dip below a $50 balance. If the balance in the account hits below $50, there is a $40 fee applied to the checking account. Account holders should be prevented from making debits that will overdraft the account.

SavingsAccount
Do the same for SavingsAccount as you did for CheckingAccount! Savings accounts can only be debitn from 10 times during the existence of the account, and any additional debits or transfers will result in a $50 debit from their savings account. Account holders are also able to transfer money from their savings account to their checking account using the transfer method you see stubbed out. In addition to this, savings accounts have the same credit (deposit), debit (withdrawal), checkBalance and getTransactions methods as its parent class, BankAccount.

Feel free to edit anything you want to implement the functionality you need.
*/

class BankAccount {
    constructor(balance) {
        this.balance = 0; 
        this.transactions={
            credits:[],
            debits:[]
        }
    }

    credit(a){
        this.transactions.credits.push(a)
        this.balance+=a;
    }
    
    debit(a){
        this.transactions.debits.push(a)
        this.balance-=a
    } 
    
    checkBalance(){
        return("Your account balance is $" + this.balance)
    }
    
    getTransactions(){
        return this.transactions
    }
    
}


class CheckingAccount extends BankAccount {
    debit(a){
        if(a<=this.balance){
            this.transactions.debits.push(a)
            this.balance-=a
        }
        else {
            return 'debit denied: insufficient funds'
        }
        if(this.balance<50)
            this.balance-=40
    } 
}

class SavingsAccount extends BankAccount{ // needs to be a subclass of BankAccount
    constructor(){
        super()
        this.link={}
        this.remainingDebits=10
    }
    linkToChecking(acct){
        this.link=acct
    } // needs to be able to inject access to an instance of a CheckingAccount so that the transfer method can work
    transfer(a){
        this.balance-=a
        return this.link.credit(a)
    }
    static transfer(a){
        if(this.link===undefined)
            return "Transfer denied: no linked checking account"
    } 
    debit(a){
        this.remainingDebits-=1
        if(this.remainingDebits<0)
            this.balance-=50
        super.debit(a)
    }
}
