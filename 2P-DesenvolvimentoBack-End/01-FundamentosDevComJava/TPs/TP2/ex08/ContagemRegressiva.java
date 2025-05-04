package com.codingloria.TP2.ex08;

public class ContagemRegressiva {
    public static void iniciarContagem(int inicio) throws InterruptedException {
        for (int i = inicio; i >= 0; i--) {
            System.out.println(i);
            Thread.sleep(1000);
        }
        System.out.println("Tempo esgotado!");
    }
}
