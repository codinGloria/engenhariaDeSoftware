package com.codingloria.aula11.inheritance;

public class CheckingAccount extends BankingAccount {
    private double operationFee;

    public CheckingAccount(String accountHoulder, double initialBalance, double operationFee) {
        super(accountHoulder, initialBalance);
        this.operationFee = operationFee;
    }

    public double getOperationFee() {
        return operationFee;
    }

    @Override
    public void withdraw(double amount) {
        double total = amount + operationFee;

        if (total > 0 && total <= getInitialBalance()) {
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
