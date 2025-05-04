package com.codingloria.exercise03.beginner;

import java.util.Scanner;

public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the first number: ");
        double firstNumber = sc.nextDouble();

        System.out.print("Enter the second number: ");
        double secondNumber = sc.nextDouble();

        System.out.println("Choose an operation: ");
        System.out.println("1. Addition");
        System.out.println("2. Subtraction");
        System.out.println("3. Multiplication");
        System.out.println("4. Division");
        System.out.print("Enter the operation number: ");
        int operation = sc.nextInt();

        switch (operation) {
            case 1:
                System.out.println("The result of the addition is " + (firstNumber + secondNumber) + ".");
                break;
            case 2:
                System.out.println("The result of the subtraction is " + (firstNumber - secondNumber) + ".");
                break;
            case 3:
                System.out.println("The result of the multiplication is " + (firstNumber * secondNumber) + ".");
                break;
            case 4:
                if (secondNumber == 0) {
                    System.out.println("Division by zero is not allowed.");
                } else {
                    System.out.println("The result of the division is " + (firstNumber / secondNumber) + ".");
                }
                break;
            default:
                System.out.println("Invalid operation number.");
        }
    }
}
