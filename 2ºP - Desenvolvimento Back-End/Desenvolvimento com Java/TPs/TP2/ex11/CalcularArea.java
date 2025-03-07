package com.codingloria.TP2.ex11;

import java.util.Scanner;

public class CalcularArea {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite a largura do retângulo: ");
        double largura = sc.nextDouble();

        System.out.print("Digite a altura do retângulo: ");
        double altura = sc.nextDouble();

        Retangulo retangulo = new Retangulo(largura, altura);
        System.out.println("Área do retângulo: " + retangulo.calcularArea() + " unidades quadradas.");

        sc.close();
    }
}
