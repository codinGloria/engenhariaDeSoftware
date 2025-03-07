package com.codingloria.TP2.ex10;

import java.util.Scanner;

public class ConversorMinutos {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o tempo em minutos: ");
        int minutos = sc.nextInt();

        System.out.println("Equivalente: " + ConversorTempo.converterMinutosParaHoras(minutos));

        sc.close();
    }
}
