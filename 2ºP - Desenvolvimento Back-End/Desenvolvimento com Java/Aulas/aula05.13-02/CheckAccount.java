package com.codingloria.aula05;

import java.util.Scanner;

public class CheckAccount {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter your account balance: ");
        double balance = sc.nextDouble();

        /* if (expression) {
            // execute code block
        } else {
            // execute code block if the expression is false
        }

        /*  switch (expression) {
            case value1:
                // execute code block
                break;
            case value2:
                // execute code block
                break;
            default:
                // execute code block if all cases are not matched
        }
        */

        // Example:

        System.out.println("Choose a option: ");
        System.out.println("[ 1 ] See balance");
        System.out.println("[ 2 ] Deposit");
        System.out.println("[ 3 ] Withdraw");

        int option = sc.nextInt();

        switch (option){
            case 1:
                System.out.println("Your balance is: " + balance);
                break;
            case 2:
                System.out.println("Enter the amount you want to deposit: ");
                double deposit = sc.nextDouble();
                balance += deposit;
                System.out.println("Deposit successful! Your new balance is: " + balance);
                break;
            case 3:
                System.out.println("Enter the amount you want to withdraw: ");
                double withdraw2 = sc.nextDouble();
                if (withdraw2 < balance) {
                    balance -= withdraw2;
                    System.out.println("Withdrawal successful! Your new balance is: " + balance);
                } else if (withdraw2 == balance) {
                    balance -= withdraw2;
                    System.out.println("Withdrawal successful! Your new balance is: " + balance);
                    System.out.println("Your account is empty");
                } else {
                    System.out.println("Insufficient funds");
                }
                break;
            default:
                System.out.println("Invalid option");
        }

        sc.close();
    }
}
