package com.codingloria.TP2.ex08;

import java.util.Scanner;

public class SimuladorContagem {
    public static void main(String[] args) throws InterruptedException {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o número inicial da contagem regressiva: ");
        int inicio = sc.nextInt();

        ContagemRegressiva.iniciarContagem(inicio);

        sc.close();
    }
}
