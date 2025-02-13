package com.codingloria.aula05.loops;

public class LoopsExamples {
    public static void main(String[] args) {

        // for loop -> used when we know the number of iterations
        for (int i = 0; i < 5; i++) {
            System.out.println("For loop: " + i);
        }

        // while loop -> used when we don't know the number of iterations
        int j = 0;
        while (j < 5) {
            System.out.println("While loop: " + j);
            j++;
        }

        // do-while loop -> used when we want to execute the block of code at least once
        int k = 0;
        do {
            System.out.println("Do-while loop: " + k);
            k++;
        } while (k < 5);

        // for-each loop -> used to iterate over an array or a collection
        String[] names = {"Alice", "Bob", "Charlie", "David", "Eve"};
        for (String name : names) {
            System.out.println("For-each loop: " + name);
        }

        // using break statement
        for (int i = 0; i < 5; i++) {
            if (i == 3) {
                break;
            }
            System.out.println("Break statement: " + i);
        }

        // using continue statement
        for (int i = 0; i < 5; i++) {
            if (i == 3) {
                continue;
            }
            System.out.println("Continue statement: " + i);
        }

        // using nested loops
        for (int i = 0; i < 3; i++) {
            for (int l = 0; l < 3; l++) {
                System.out.println("Nested loops: " + i + " " + l);
            }
        }

    }
}
