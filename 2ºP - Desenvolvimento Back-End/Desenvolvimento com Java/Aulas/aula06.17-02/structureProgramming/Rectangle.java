package com.codingloria.aula06.structureProgramming;

import java.util.Scanner;

public class Rectangle {
    // Method to calculate the area
    public static double calculateArea(double height, double width){
        return height * width;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the width: ");
        double width = sc.nextDouble();

        System.out.print("Enter the height: ");
        double height = sc.nextDouble();

        double area = calculateArea(height, width);
        System.out.println("Area = ");
    }
}
