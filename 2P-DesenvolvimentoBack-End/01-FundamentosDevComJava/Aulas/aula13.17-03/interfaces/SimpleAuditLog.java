package com.codingloria.aula13.interfaces;

public class SimpleAuditLog implements AuditLog{
    @Override
    public void registerDeposit(double amount) {
        System.out.println("Registering deposit of $" + amount + " CODE: " + AUDIT_OPERATION_CODE);
    }

    @Override
    public void registerWithdrawal(double amount) {
        System.out.println("Registering withdrawal of $" + amount + " CODE: " + AUDIT_OPERATION_CODE);
    }

    @Override
    public void registerTransfer(double amount, String destinationAccount) {
        System.out.println("Registering transfer of $" + amount +
                " to account: " + destinationAccount +
                " CODE: " + AUDIT_OPERATION_CODE);
    }
}
