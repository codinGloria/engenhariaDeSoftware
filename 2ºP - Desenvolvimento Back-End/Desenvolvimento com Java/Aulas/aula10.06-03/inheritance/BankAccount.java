package com.codingloria.aula10.inheritance;

public class BankAccount {
    private String accountHoulder;
    private double balance;

    public BankAccount(String accountHoulder, double balance) {
        this.accountHoulder = accountHoulder;
        this.balance = balance;
    }

    public String getAccountHoulder() {
        return accountHoulder;
    }

    public void setAccountHoulder(String accountHoulder) {
        this.accountHoulder = accountHoulder;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposit of " + amount + " made. New balance is " + balance);
        } else {
            System.out.println("Cannot deposit non-positive amount.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0) {
            if (balance >= amount) {
                balance -= amount;
                System.out.println("Withdrawal of " + amount + " processed. Remaining balance is " + balance);
            } else {
                System.out.println("Insufficient funds or invalid value.");
            }
        } else {
            System.out.println("Cannot withdraw non-positive amount.");
        }
    }

    public void display() {
        System.out.println();
        System.out.println("---- Account Information ----");
        System.out.println("Account holder: " + accountHoulder);
        System.out.println("Balance: " + balance);
    }
}
