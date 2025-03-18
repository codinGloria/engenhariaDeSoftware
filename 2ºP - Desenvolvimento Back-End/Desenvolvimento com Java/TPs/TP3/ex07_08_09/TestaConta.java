package com.codingloria.TP3.ex07_08_09;

public class TestaConta{
    public static void main(String[] args) {
        Conta c1 = new Conta();
        c1.titular = "Luan";
        c1.numero = 123;
        c1.agencia = "456";
        c1.saldo = 1000;
        c1.dataAbertura = "18/10/2022";

        System.out.println("#### Conta ####");
        System.out.println("Titular: " + c1.titular);
        System.out.println("Número: " + c1.numero);
        System.out.println("Agência: " + c1.agencia);
        System.out.println("Saldo: " + c1.saldo);
        System.out.println("Data de abertura: " + c1.dataAbertura);

        System.out.println("#### Operações ####");
        c1.saca(100);
        System.out.println("Saldo atual: " + c1.saldo);
        c1.deposita(200);
        System.out.println("Novo saldo: " + c1.saldo);
        double rendimento = c1.calculaRendimento();
        System.out.println("Rendimento: " + rendimento);
    }
}
