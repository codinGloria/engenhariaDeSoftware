package com.codingloria.exercise03.beginner;

import java.util.Scanner;

public class SumNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int sum = 0;

        System.out.print("Enter the number of elements: ");
        int numberOfElements = sc.nextInt();

        for (int i = 0; i <= numberOfElements; i++) {
            sum += i;
        }

        System.out.println("The sum of the first " + numberOfElements + " natural numbers is " + sum + ".");

    }
}
