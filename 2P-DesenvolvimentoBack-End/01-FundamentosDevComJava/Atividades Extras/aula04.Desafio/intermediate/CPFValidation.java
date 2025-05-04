package com.codingloria.exercise03.intermediate;

import java.util.Scanner;

public class CPFValidation {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a CPF number: ");
        String cpf = sc.nextLine();

        if (cpf.length() == 11 && cpf.matches("[0-9]+")) {
            System.out.println("Valid CPF number.");
        } else {
            System.out.println("Invalid CPF number.");
        }

    }
}
