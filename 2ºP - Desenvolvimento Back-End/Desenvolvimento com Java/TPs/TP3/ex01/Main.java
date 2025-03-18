package com.codingloria.TP3.ex01;

public class Main {
    public static void main(String[] args) {
        Pirata p1 = new Pirata();
        p1.setNome("Zoro");
        p1.setRecompensa(32000);

        Pirata p2 = new Pirata("Luffy", 100000);
        p2.atacar();
        p1.aumentarRecompensa(10);

        System.out.println(p1);
        System.out.println(p2);
    }
}
