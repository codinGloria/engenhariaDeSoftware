package com.codingloria.aula13.interfaces;

import com.codingloria.aula13.BankAccount;

public class AccountManager {
    private AuditLog auditLog;

    public AccountManager(AuditLog auditLog) {
        this.auditLog = auditLog;
    }

    public void deposit(BankAccount account, double amount) {
        account.deposit(amount);
        auditLog.registerDeposit(amount);
    }
}
