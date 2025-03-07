package com.codingloria.TP2.ex03;

import java.util.Scanner;

public class ConversorMoedas {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o valor em reais: ");
        double valor = sc.nextDouble();
        sc.nextLine(); // Consumir a quebra de linha

        System.out.print("Digite a moeda de destino (dolar, euro, libra): ");
        String moeda = sc.nextLine();

        double resultado = ConversorMoeda.converter(valor, moeda);

        if (resultado == -1) {
            System.out.println("Moeda inválida!");
        } else {
            System.out.printf("Valor convertido: %.2f %s%n", resultado, moeda);
        }

        sc.close();
    }
}
