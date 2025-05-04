package com.codingloria.aula11.inheritance;

public class SpecialCheckingAccount extends CheckingAccount {

    private double extraLimit;

    public SpecialCheckingAccount( String accountHoulder,
                                  double initialBalance,
                                  double operationFee,
                                  double extraLimit) {
        super(accountHoulder, initialBalance, operationFee);
        this.extraLimit = extraLimit;
    }

    @Override
    public void withdraw(double amount) {
        double availableBalance = getInitialBalance() + extraLimit;
        double total = amount + getOperationFee();
        var newBalance = availableBalance - total;

        if (total <= availableBalance && total > 0) {
            setInitialBalance(newBalance);
        } else {
            System.out.println("Insufficient funds or invalid value.");
        }
    }

    @Override
    public void display() {
        super.display();
        System.out.println("Extra limit: " + extraLimit);
        System.out.println();
    }
}
