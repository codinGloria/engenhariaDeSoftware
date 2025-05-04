package com.codingloria.TP2.ex02;

public class Aluno {
    private double[] notas;

    public Aluno(double[] notas) {
        this.notas = notas;
    }

    public double calcularMedia() {
        double soma = 0;
        for (double nota : notas) {
            soma += nota;
        }
        return soma / notas.length;
    }

    public void exibirResultado() {
        double media = calcularMedia();
        String resultado = media >= 7 ? "Aprovado" : (media >= 5 ? "Em recuperação" : "Reprovado");
        System.out.printf("\nMédia: %.2f - Situação: %s%n", media, resultado);
    }
}
