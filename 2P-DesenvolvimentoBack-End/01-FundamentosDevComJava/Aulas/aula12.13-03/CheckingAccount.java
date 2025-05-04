package com.codingloria.aula12;

public class CheckingAccount extends BankAccount {
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

        if (total > 0 && total <= getBalance()) {
            super.withdraw(amount);
            super.withdraw(operationFee);
            System.out.println("Operation fee of " + operationFee + " charged.");
        } else {
            System.out.println("Insufficient funds or invalid value.");
        }
    }

    @Override
    public double calculateSpecialFee() {
        if (getBalance() > 50000) {
            return 10.0;
        }
        return 5.0;
    }

    //Compile error;
//    @Override
//    public final void initializeSpecial() {
//        super.displayInformation();
//        System.out.println("Operation fee: R$" + operationFee);
//    }

    @Override
    public void displayInformation() {
        super.displayInformation();
        System.out.println("Operation fee: " + operationFee);
        System.out.println();
    }
}
