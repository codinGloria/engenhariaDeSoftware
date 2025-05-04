package com.codingloria.exercise03;

import java.util.Scanner;

public class BankDeposit {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = sc.nextLine();

        System.out.print("Enter your account balance: ");
        double balance = sc.nextDouble();

        System.out.print("How much do you want to deposit? ");
        double deposit = sc.nextDouble();

        if (deposit > 0) {
            balance += deposit;
            System.out.println("Deposit successful! Your new balance is: " + balance);
        } else {
            System.out.println("Invalid deposit amount");
        }

        sc.close();
    }
}
