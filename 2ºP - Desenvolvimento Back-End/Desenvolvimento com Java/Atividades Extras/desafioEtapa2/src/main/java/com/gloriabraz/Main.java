package com.gloriabraz;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("How old are you: ");
        int age = sc.nextInt();
        System.out.print("Do you have a special permit? (true/false): ");
        boolean specialPermit = sc.nextBoolean();
        System.out.print("Insert your password: ");
        String password = sc.next();

        if ((age >= 18 || specialPermit) && password.equals("1234")){
            System.out.print("Access granted!");
        } else {
            if (!(age >= 18 || specialPermit)){
                System.out.print("Access denied! \nReason: You have to be at least 18 years old or have a special permit.");
            } else if (!password.equals("1234")){
                System.out.print("Access denied! \nReason: Wrong password.");
            }
        }

        sc.close();
    }
}