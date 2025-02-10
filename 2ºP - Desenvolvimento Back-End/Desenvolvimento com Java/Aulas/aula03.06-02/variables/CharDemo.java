package com.gloriabraz.variables;

public class CharDemo {
    public static void main(String[] args) {
        char ch = 'X';
        System.out.println("The character is: " + ch);

        ch++;
        System.out.println("The character is: " + ch);

        ch = 90;
        System.out.println("The character is: " + ch);

        for (int i = 0; i < 500; i++){
            System.out.println(i + " = " + (char)i);
        }
    }
}
