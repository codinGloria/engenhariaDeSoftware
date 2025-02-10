package com.codingloria.aula04.dataEntry;

import java.util.Scanner;

public class DataEntrance {
    public static void main(String[] args) {
        // Data entrance
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter your name: ");
        String name = sc.nextLine();

        System.out.println("Enter your age: ");
        int age = sc.nextInt();

        System.out.println("Welcome, "  + name + "! You are " + age + " years old.");

        sc.close();
    }
}
