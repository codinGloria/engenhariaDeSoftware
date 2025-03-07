package com.codingloria.aula10.inheritance;

public class SavingsAccount extends BankAccount {
    private double interestRate;

    public SavingsAccount(String accountHoulder, double balance, double interestRate) {
        super(accountHoulder, balance);
        this.interestRate = interestRate;
    }

    public void applyInterest() {
        var interest = getBalance() * (interestRate / 100);
        deposit(interest);
        System.out.println("Interest of " + interest + " applied. New balance is " + getBalance());
    }

    @Override
    public void display() {
        super.display();
        System.out.println("Interest rate: " + interestRate);
        System.out.println();
    }
}
