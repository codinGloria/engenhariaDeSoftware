package com.codingloria.TP3.ex02_03_04_05_06;

public class Produto {
    String nome;
    double preco;
    int quantidadeEmEstoque;

    public Produto() {
    }

    public Produto(String nome, double preco, int quantidadeEmEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    public double alterarPreco(double novoPreco) {
        this.preco = novoPreco;
        return this.preco;
    }

    public int alterarQuantidade(int novaQuantidade) {
        this.quantidadeEmEstoque += novaQuantidade;
        return this.quantidadeEmEstoque;
    }

    public void exibirInformacoes() {
        System.out.println("---- Produto ----");
        System.out.println("Nome: " + this.nome);
        System.out.println("Preço: " + this.preco);
        System.out.println("Quantidade em estoque: " + this.quantidadeEmEstoque);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public int getQuantidadeEmEstoque() {
        return quantidadeEmEstoque;
    }

    public void setQuantidadeEmEstoque(int quantidadeEmEstoque) {
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
}
