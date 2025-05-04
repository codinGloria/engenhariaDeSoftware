package com.codingloria.TP2.ex07;

import java.util.Scanner;

public class ConversorProgram {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite a temperatura: ");
        double temperatura = sc.nextDouble();
        sc.nextLine();

        System.out.print("Converter para (C)elsius ou (F)ahrenheit? ");
        String escolha = sc.nextLine().toUpperCase();

        if (escolha.equals("C")) {
            System.out.printf("Temperatura em Celsius: %.2f°C%n", ConversorTemperatura.fahrenheitParaCelsius(temperatura));
        } else if (escolha.equals("F")) {
            System.out.printf("Temperatura em Fahrenheit: %.2f°F%n", ConversorTemperatura.celsiusParaFahrenheit(temperatura));
        } else {
            System.out.println("Escolha inválida.");
        }

        sc.close();
    }
}
