package com.codingloria.aula06;

public class NestedLoops {
    public static void main(String[] args) {

        for (int i = 1; i <= 10; i++) {
            System.out.print(" Multiplication table of " + i + "\n");
            for (int j = 1; j <= 10; j++) {
                System.out.print(i + " x " + j + " = " + (i * j) + "\n");
            }
            System.out.println();
        }
    }
}
