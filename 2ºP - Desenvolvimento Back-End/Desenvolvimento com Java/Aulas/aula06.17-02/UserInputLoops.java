package com.codingloria.aula06;

import java.util.Scanner;

public class UserInputLoops {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String order;

        do {
            System.out.println("Enter an order or type 'exit' to close the system:");
            order = sc.nextLine();
            if (!order.equalsIgnoreCase("exit")) {
                System.out.println("Order received: " + order);
            }

        } while (!order.equalsIgnoreCase("exit"));

        System.out.println("System closed.");

        sc.close();
    }
}
