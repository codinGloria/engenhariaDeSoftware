package com.codingloria.aula13.service;

import static com.codingloria.aula13.util.OperationCodes.DEPOSIT_OP;

public class OperationService {
    public void process(int operationCode) {
        if (operationCode == DEPOSIT_OP) {
            // do something...
        }
    }
}
