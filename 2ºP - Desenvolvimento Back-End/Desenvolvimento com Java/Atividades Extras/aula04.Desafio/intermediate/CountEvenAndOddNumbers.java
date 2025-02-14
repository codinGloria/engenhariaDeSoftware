package com.codingloria.exercise03.intermediate;

import java.util.Scanner;

public class CountEvenAndOddNumbers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int evenCount = 0;
        int oddCount = 0;

        for (int i = 0; i < 10; i++) {
            System.out.print("Enter a number: ");
            int number = sc.nextInt();

            if (number % 2 == 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }

        System.out.println("Even numbers: " + evenCount);
        System.out.println("Odd numbers: " + oddCount);

    }
}
