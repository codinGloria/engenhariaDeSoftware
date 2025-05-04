package com.codingloria.TP2.ex06;

import java.util.Scanner;

public class ValidadorSenha {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite sua senha: ");
        String senha = sc.nextLine();

        if (GerenciadorSenha.validarSenha(senha)) {
            System.out.println("Senha válida!");
        } else {
            System.out.println("Senha inválida! Ela deve ter pelo menos 8 caracteres, um número e uma letra maiúscula.");
        }

        sc.close();
    }
}
