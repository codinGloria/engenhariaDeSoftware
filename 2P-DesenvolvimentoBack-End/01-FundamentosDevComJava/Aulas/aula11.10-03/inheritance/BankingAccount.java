package com.codingloria.aula11.inheritance;

public class BankingAccount {
    private String accountHoulder;
    private double initialBalance;

    public BankingAccount(String accountHoulder, double initialBalance) {
        this.accountHoulder = accountHoulder;
        this.initialBalance = initialBalance;
    }

    public String getAccountHoulder() {
        return accountHoulder;
    }

    public void setAccountHoulder(String accountHoulder) {
        this.accountHoulder = accountHoulder;
    }

    public double getInitialBalance() {
        return initialBalance;
    }

    public void setInitialBalance(double initialBalance) {
        this.initialBalance = initialBalance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            initialBalance += amount;
            System.out.println("Deposit of " + amount + " made. New balance is " + initialBalance);
        } else {
            System.out.println("Cannot deposit non-positive amount.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0) {
            if (initialBalance >= amount) {
                initialBalance -= amount;
                System.out.println("Withdrawal of " + amount + " processed. Remaining balance is " + initialBalance);
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
        System.out.println("Balance: " + initialBalance);
    }
}
