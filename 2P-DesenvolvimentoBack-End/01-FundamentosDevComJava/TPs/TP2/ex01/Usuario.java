package com.codingloria.TP2.ex01;

public class Usuario {
    private String nome;
    private int idade;
    private String nomeMae;
    private String nomePai;

    public Usuario(String nome, int idade, String nomeMae, String nomePai) {
        this.nome = nome;
        this.idade = idade;
        this.nomeMae = nomeMae;
        this.nomePai = nomePai;
    }

    public void exibirInformacoes() {
        System.out.println("\n--- Dados do Usuário ---");
        System.out.println("Nome: " + nome);
        System.out.println("Idade: " + idade);
        System.out.println("Nome da Mãe: " + nomeMae);
        System.out.println("Nome do Pai: " + nomePai);

        String nomeMaisLongo = nome.length() > nomeMae.length() && nome.length() > nomePai.length() ?
                "seu nome é o mais longo!" :
                (nomeMae.length() > nomePai.length() ? "O nome da sua mãe é o mais longo!" : "O nome do seu pai é o mais longo!");

        System.out.println(nomeMaisLongo);
    }
}
