package com.codingloria.exercise03.intermediate;

import java.util.Scanner;

public class NumberGuessing {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int numberToGuess = (int) (Math.random() * 100) + 1;
        int numberOfTries = 0;

        System.out.println("Guess a number between 1 and 100.");
        int numberGuessed = sc.nextInt();

        while (numberGuessed != numberToGuess) {
            if (numberGuessed > numberToGuess) {
                System.out.println("Too high. Try again.");
            } else {
                System.out.println("Too low. Try again.");
            }

            numberGuessed = sc.nextInt();
            numberOfTries++;
        }

        System.out.println("Congratulations! You guessed the number in " + numberOfTries + " tries.");
    }
}
