package com.codingloria.exercise03.beginner;

import java.util.Scanner;

public class Countdown {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int number = sc.nextInt();

        for (int i = number; i >= 0; i--) {
            System.out.println(i);
        }
    }
}
