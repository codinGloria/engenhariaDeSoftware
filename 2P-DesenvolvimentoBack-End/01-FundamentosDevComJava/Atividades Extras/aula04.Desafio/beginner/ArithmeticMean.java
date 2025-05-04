package com.codingloria.exercise03.beginner;

import java.util.Scanner;

public class ArithmeticMean {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int number = 0;
        double sum = 0;

        for (int i = 1; i <= 5; i++) {
            System.out.print("Enter number " + i + ": ");
            number = sc.nextInt();
        }

        for (int i = 1; i <= 5; i++) {
            sum += number;
        }

        double arithmeticMean = sum / 5;

        System.out.println("The arithmetic mean of the numbers is " + arithmeticMean + ".");
    }
}
