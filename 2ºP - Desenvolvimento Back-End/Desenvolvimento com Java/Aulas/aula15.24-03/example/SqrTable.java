package com.codingloria.aula15.example;

public class SqrTable {
    public static void main(String[] args) {
        int[][] sqrs = {
                {1, 1},
                {2, 4},
                {3, 9},
                {4, 16},
                {5, 25},
                {7, 49},
                {8, 64},
                {9, 81},
                {10, 100}
        };

        for (int i = 0; i < sqrs.length; i++) {
            System.out.println("Number: " + sqrs[i][0] +
                    ", Square: " + sqrs[i][1]);
        }
    }
}
