package com.codingloria.aula11.inheritance;

public class SavingsAccount extends BankingAccount {
    private double interestRate;

    public SavingsAccount(String accountHoulder, double balance, double interestRate) {
        super(accountHoulder, balance);
        this.interestRate = interestRate;
    }

    public void applyInterest() {
        var interest = getInitialBalance() * (interestRate / 100);
        deposit(interest);
        System.out.println("Interest of " + interest + " applied. New balance is " + getInitialBalance());
    }

    @Override
    public void display() {
        super.display();
        System.out.println("Interest rate: " + interestRate);
        System.out.println();
    }
}
