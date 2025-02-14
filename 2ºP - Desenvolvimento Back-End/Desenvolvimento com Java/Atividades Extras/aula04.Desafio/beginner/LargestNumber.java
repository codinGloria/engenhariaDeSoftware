package com.codingloria.exercise03.beginner;

import java.util.Scanner;

public class LargestNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the first number: ");
        int firstNumber = sc.nextInt();

        System.out.print("Enter the second number: ");
        int secondNumber = sc.nextInt();

        System.out.print("Enter the third number: ");
        int thirdNumber = sc.nextInt();

        if (firstNumber > secondNumber && firstNumber > thirdNumber) {
            System.out.println("The largest number is " + firstNumber + ".");
        } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
            System.out.println("The largest number is " + secondNumber + ".");
        } else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
            System.out.println("The largest number is " + thirdNumber + ".");
        } else {
            System.out.println("There is no largest number, maybe some of them are equals. Try again with different numbers!");
        }
    }
}
