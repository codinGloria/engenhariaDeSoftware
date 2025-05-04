package com.codingloria.TP3.ex07_08_09;

public class Conta {
    String titular;
    int numero;
    String agencia;
    double saldo;
    String dataAbertura;

    public Double saca(double valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return valor;
        }
        return null;
    }

    public void deposita(double valor) {
        this.saldo += valor;
    }

    public double calculaRendimento() {
        return this.saldo * 0.1;
    }
}
