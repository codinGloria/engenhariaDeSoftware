package com.codingloria.aula15.example;

public class LengthDemo {
    public static void main(String[] args) {
        int[] list = new int[10];
        int[][] table = new int[3][4];

        System.out.println("List size: " + list.length);
        System.out.println("Number of arrays in table (first dimension): " + table.length);
        System.out.println("Size of table[0]: " + table[0].length);

        for (int i = 0; i < list.length; i++) {
            System.out.print(list[i] + " ");
        }
        System.out.println();

        for (int i = 0; i < table.length; i++) {
            for (int j = 0; j < table[i].length; j++) {
                System.out.print(table[i][j] + " ");
            }
            System.out.println();
        }
    }
}
