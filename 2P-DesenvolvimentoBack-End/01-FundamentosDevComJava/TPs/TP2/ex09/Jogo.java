package com.codingloria.TP2.ex09;

import java.util.Random;
import java.util.Scanner;

public class Jogo {
    private int numeroSecreto;
    private int tentativas;

    public Jogo() {
        Random random = new Random();
        this.numeroSecreto = random.nextInt(100) + 1;
        this.tentativas = 0;
    }

    public void jogar() {
        Scanner sc = new Scanner(System.in);
        int palpite;

        System.out.println("Adivinhe um número entre 1 e 100!");

        do {
            System.out.print("Seu palpite: ");
            palpite = sc.nextInt();
            tentativas++;

            if (palpite < numeroSecreto) {
                System.out.println("Muito baixo! Tente novamente.");
            } else if (palpite > numeroSecreto) {
                System.out.println("Muito alto! Tente novamente.");
            }
        } while (palpite != numeroSecreto);

        System.out.println("Parabéns! Você acertou em " + tentativas + " tentativas.");
        sc.close();
    }
}
