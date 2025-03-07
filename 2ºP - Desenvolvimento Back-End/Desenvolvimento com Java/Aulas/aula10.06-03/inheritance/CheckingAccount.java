package com.codingloria.aula10.inheritance;

public class CheckingAccount extends BankAccount{

    private double operationFee;

    public CheckingAccount(String accountHoulder, double balance, double operationFee) {
        super(accountHoulder, balance);
        this.operationFee = operationFee;
    }

    @Override
    public void withdraw(double amount) {
        double total = amount + operationFee;

        if (total > 0 && total <= getBalance()) {
            super.withdraw(amount);
            super.withdraw(operationFee);
            System.out.println("Operation fee of " + operationFee + " charged.");
        } else {
            System.out.println("Insufficient funds or invalid value.");
        }
    }

    @Override
    public void display() {
        super.display();
        System.out.println("Operation fee: " + operationFee);
        System.out.println();
    }
}
