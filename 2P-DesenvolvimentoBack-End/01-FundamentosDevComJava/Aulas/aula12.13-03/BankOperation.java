package com.codingloria.aula12;

public class BankOperation {
    public static final int DEPOSIT_OP = 1;
    public static final int WITHDRAWAL_OP = 2;
    public static final int TRANSFER_OP = 3;

    private final int operationType;
    private double amount;

    public BankOperation(int operationType, double amount) {
        this.operationType = operationType;
        this.amount = amount;
    }

    public void process() {
        switch (operationType) {
            case DEPOSIT_OP -> System.out.println("Processing deposit of $" + amount);
            case WITHDRAWAL_OP -> System.out.println("Processing withdrawal of $" + amount);
            case TRANSFER_OP -> System.out.println("Processing transfer of $" + amount);
            default -> System.out.println("Unknown operation!");
        }
    }

    public void makePayment(final double amount, String description) {
        // we can't change the amount here in a final method
        // amount = 50.0; // this will not compile

        final String message = "Payment in process. Description: " + description;
        // message = "another message"; // this will not compile

        description = "changed";
    }

    public int getOperationType() {
        return operationType;
    }

    // we cant modify a final variable
//    public void setOperationType(int operationType) {
//        // this will not compile
//        // this.operationType = operationType;
//    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}
