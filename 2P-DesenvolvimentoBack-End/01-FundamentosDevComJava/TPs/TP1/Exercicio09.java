package com.codingloria.TP1;

import java.util.Scanner;

public class Exercicio09 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite seu nome: ");
        String nome = sc.nextLine();

        System.out.print("Digite sua idade: ");
        int idade = sc.nextInt();

        System.out.print( "Digite sua altura: ");
        double altura = sc.nextDouble();

        System.out.println("Nome: "  + nome + ", Idade: " + idade + ", Altura: " + altura);

        sc.close();
    }
}
