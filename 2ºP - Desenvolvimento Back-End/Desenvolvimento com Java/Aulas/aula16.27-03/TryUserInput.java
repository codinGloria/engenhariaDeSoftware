package com.codingloria.aula16;

import java.util.InputMismatchException;
import java.util.Scanner;

public class TryUserInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            System.out.print("Enter a number: ");
            int number = sc.nextInt();
            System.out.println("You entered: " + number);
        } catch (InputMismatchException e) {
            System.out.println("Error: You must enter an integer number");
        } finally {
            sc.close();
        }
    }
}
