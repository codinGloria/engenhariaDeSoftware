package com.codingloria.aula13;

public abstract class BankAccount {
    private String houlder;
    private double balance;

    public BankAccount(String houlder, double initialBalance) {
        this.houlder = houlder;
        this.balance = initialBalance;
    }

    public String getHoulder() {
        return houlder;
    }

    public void setHoulder(String houlder) {
        this.houlder = houlder;
    }

    public void changeHoulder(String houlder) {
        this.houlder = houlder;
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
        if (isValid(amount)) {
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

    private boolean isValid(double amount) {
        return amount > 0 && amount <= balance;
    }

    public void displayInformation() {
        System.out.println();
        System.out.println("---- Account Information ----");
        System.out.println("Account holder: " + houlder);
        System.out.println("Balance: " + balance);
    }

    public abstract double calculateSpecialFee();

    public final void initializeSpecialResources() {
        System.out.println("Secure initialization of resources for the account.");
    }
}
