package com.codingloria.aula12;

public class SavingAccount extends BankAccount {
    private double interestRate;

    public SavingAccount(String accountHoulder, double balance, double interestRate) {
        super(accountHoulder, balance);
        this.interestRate = interestRate;
    }

    public void applyInterest() {
        var interest = getBalance() * (interestRate / 100);
        deposit(interest);
        System.out.println("Interest of " + interest + " applied. New balance is " + getBalance());
    }

    @Override
    public void displayInformation() {
        super.displayInformation();
        System.out.println("Interest rate: " + interestRate);
        System.out.println();
    }

    @Override
    public double calculateSpecialFee() {
        return 2.0;
    }
}
