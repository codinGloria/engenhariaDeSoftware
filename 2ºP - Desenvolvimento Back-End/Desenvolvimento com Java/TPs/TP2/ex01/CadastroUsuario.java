package com.codingloria.TP2.ex01;

import java.util.Scanner;

public class CadastroUsuario {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Digite seu nome completo: ");
        String nome = sc.nextLine();

        System.out.print("Digite sua idade: ");
        int idade = sc.nextInt();
        sc.nextLine();

        System.out.print("Digite o nome da sua mãe: ");
        String nomeMae = sc.nextLine();

        System.out.print("Digite o nome do seu pai: ");
        String nomePai = sc.nextLine();

        Usuario usuario = new Usuario(nome, idade, nomeMae, nomePai);
        usuario.exibirInformacoes();

        sc.close();
    }
}
