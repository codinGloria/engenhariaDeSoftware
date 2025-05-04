package com.codingloria.aula05;

import java.util.Scanner;

public class TernaryExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

/*
        System.out.print("Enter your age: ");
        int age = sc.nextInt();

        // Using if-else
        String category, categoryTernary;
        if (age < 18) {
            category = "Minor";
        } else {
            category = "Adult";
        }
        System.out.println("Category using if-else: " + category);

        // Using ternary operator
        categoryTernary = (age < 18) ? "Minor" : "Adult";
        System.out.println("Category using ternary: " + categoryTernary);
*/

        System.out.print("Enter your account balance: ");
        double balance = sc.nextDouble();

        // Standart, Basic or Premium account
        String AccountType = (balance > 10000) ? "Premium" :
                (balance >= 5000) ? "Standart" : "Basic";

        System.out.println("Your account type is: " + AccountType);

        sc.close();
    }
}
