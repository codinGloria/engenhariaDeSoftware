package com.codingloria.TP3.ex02_03_04_05_06;

public class Main {
    public static void main(String[] args) {
        Produto p1 = new Produto();
        p1.nome = "Camisa";
        p1.preco = 50.0;
        p1.quantidadeEmEstoque = 10;

        p1.alterarPreco(60.0);
        p1.alterarQuantidade(16);
        p1.exibirInformacoes();

        System.out.println("----------------");
        p1.setNome("Calça");
        p1.setPreco(80.0);
        p1.setQuantidadeEmEstoque(20);

        System.out.println("Nome: " + p1.getNome());
        System.out.println("Preço: " + p1.getPreco());
        System.out.println("Quantidade em estoque: " + p1.getQuantidadeEmEstoque());

        // Testando construtor com parâmetros
        Produto p2 = new Produto("Tênis", 150.0, 5);
        p2.exibirInformacoes();
    }
}
