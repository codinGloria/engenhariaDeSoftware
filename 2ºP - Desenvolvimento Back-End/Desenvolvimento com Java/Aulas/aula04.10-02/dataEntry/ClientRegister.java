package com.codingloria.aula04.dataEntry;

import java.util.Scanner;

public class ClientRegister {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your name: ");
        var name = sc.nextLine();

        System.out.print("Enter your CPF: ");
        var cpf = sc.nextLine();

        System.out.print("Enter your age: ");
        var age = sc.nextInt();

        System.out.print("Enter your initial balance: ");
        var balance = sc.nextDouble();

        System.out.print("Account active? (true/false): ");
        var isActive = sc.nextBoolean();

        System.out.println("Registered client:");
        System.out.println("Name: " + name);
        System.out.println("CPF: " + cpf);
        System.out.println("Age: " + age);
        System.out.println("Balance: " + balance);
        System.out.println("Active: " + isActive);

        sc.close();
    }
}
