package com.codingloria.exercise03;

import java.util.Scanner;

public class BankingSystem {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = sc.nextLine();

        System.out.print("Enter your account balance: ");
        double balance = sc.nextDouble();

        System.out.print("Enter your access PIN: ");
        int pin = sc.nextInt();

        if (pin == 2547845){

            System.out.println("Choose a option: ");
            System.out.println("[ 1 ] See balance");
            System.out.println("[ 2 ] Deposit");
            System.out.println("[ 3 ] Withdraw");
            System.out.println("[ 4 ] Exit");

            int option = sc.nextInt();

            switch (option) {
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
                    double withdraw = sc.nextDouble();
                    if (withdraw < balance) {
                        balance -= withdraw;
                        System.out.println("Withdrawal successful! Your new balance is: " + balance);
                    } else if (withdraw == balance) {
                        balance -= withdraw;
                        System.out.println("Withdrawal successful! Your new balance is: " + balance);
                        System.out.println("Your account is empty");
                    } else {
                        System.out.println("Insufficient funds");
                    }
                    break;
                default:
                    System.out.println("Invalid option");
                }
        } else {
            System.out.println("Invalid PIN");
        }
    }
}
