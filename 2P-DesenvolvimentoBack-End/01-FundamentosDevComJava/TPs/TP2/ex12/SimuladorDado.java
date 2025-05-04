package com.codingloria.TP2.ex12;

import java.util.Scanner;

public class SimuladorDado {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Pressione ENTER para lançar o dado...");
        sc.nextLine();

        int resultado = Dado.lancarDado();
        System.out.println("Você tirou: " + resultado);

        sc.close();
    }
}
