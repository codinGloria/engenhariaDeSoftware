package com.codingloria;

import com.codingloria.aula13.interfaces.AccountManager;
import com.codingloria.aula13.interfaces.CompleteAuditLog;
import com.codingloria.aula13.interfaces.SimpleAuditLog;

public class Main {
    public static void main(String[] args) {
    AccountManager simpleAccountManager = new AccountManager(
            new SimpleAuditLog());
    AccountManager gerenciadorDeContasCompleta = new AccountManager(
            new CompleteAuditLog());
    }
}
