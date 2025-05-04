package com.codingloria.aula13.interfaces;

public interface AuditLog {
    // Constant (implicitly public, static, and final)
    int AUDIT_OPERATION_CODE = 999;

    // Abstract methods (without implementation)
    void registerDeposit(double amount);
    void registerWithdrawal(double amount);
    void registerTransfer(double amount, String destinationAccount);
}
