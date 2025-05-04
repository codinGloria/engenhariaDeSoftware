package com.codingloria.aula04;

import java.util.Scanner;

public class CommonError {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your balance: ");
        double balance = sc.nextDouble();
        sc.nextLine();

        System.out.print("Enter your city: ");
        String city = sc.nextLine();

        System.out.println("Balance: " + balance);
        System.out.println("City: " + city);
    }
}
