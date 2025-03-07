package com.codingloria.TP2.ex02;

import java.util.Scanner;

public class CalculadoraMedia {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double[] notas = new double[4];

        for (int i = 0; i < 4; i++) {
            System.out.printf("Digite a nota %d: ", i + 1);
            notas[i] = sc.nextDouble();
        }

        Aluno aluno = new Aluno(notas);
        aluno.exibirResultado();

        sc.close();
    }
}
