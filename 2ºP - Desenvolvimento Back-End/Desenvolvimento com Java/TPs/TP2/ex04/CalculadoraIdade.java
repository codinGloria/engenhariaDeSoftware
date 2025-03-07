package com.codingloria.TP2.ex04;

import java.util.Scanner;

public class CalculadoraIdade {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite o dia do nascimento: ");
        int dia = sc.nextInt();

        System.out.print("Digite o mês do nascimento: ");
        int mes = sc.nextInt();

        System.out.print("Digite o ano do nascimento: ");
        int ano = sc.nextInt();

        IdadeDias idade = new IdadeDias(dia, mes, ano);
        System.out.println("Sua idade em dias: " + idade.calcularIdadeEmDias());

        sc.close();
    }
}
