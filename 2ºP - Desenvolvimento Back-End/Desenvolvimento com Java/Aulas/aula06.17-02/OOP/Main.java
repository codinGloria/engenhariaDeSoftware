package com.codingloria.aula06.OOP;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the width of the rectangle: ");
        double width = sc.nextDouble();

        System.out.print("Enter the height of the rectangle: ");
        double height = sc.nextDouble();

        Rectangle rectangle = new Rectangle(width, height);

        System.out.println("\nArea of the rectangle: " + rectangle.getArea());
    }
}
