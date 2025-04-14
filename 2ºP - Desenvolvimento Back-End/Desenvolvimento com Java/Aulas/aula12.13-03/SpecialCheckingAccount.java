package com.codingloria.aula12;

public class SpecialCheckingAccount extends CheckingAccount {

    private double extraLimit;

    public SpecialCheckingAccount(String accountHoulder,
                                  double initialBalance,
                                  double operationFee,
                                  double extraLimit) {
        super(accountHoulder, initialBalance, operationFee);
        this.extraLimit = extraLimit;
    }

    @Override
    public void withdraw(double amount) {
        double availableBalance = getBalance() + extraLimit;
        double total = amount + getOperationFee();
        var newBalance = availableBalance - total;

        if (total <= availableBalance && total > 0) {
            setBalance(newBalance);
        } else {
            System.out.println("Insufficient funds or invalid value.");
        }
    }

    @Override
    public void displayInformation() {
        super.displayInformation();
        System.out.println("Extra limit: " + extraLimit);
        System.out.println();
    }
}
