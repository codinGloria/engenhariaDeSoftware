package com.codingloria.TP3.ex01;

public class Pirata {
    private String nome;
    private double recompensa;

    public Pirata() {
    }

    public Pirata(String nome, double recompensa) {
        this.nome = nome;
        this.recompensa = recompensa;
    }

    @Override
    public String toString() {
        return "---- Pirata ----\nNome: " + nome + "\nRecompensa: " + recompensa + " berries\n";
    }

    public void atacar(){
        System.out.println(nome + " partiu para o ataque!");
    }

    void aumentarRecompensa(double valor){
        recompensa += valor;
        System.out.println("Recompensa de " + nome + " aumentou para " + recompensa + " berries.");
    }

    public double getRecompensa() {
        return recompensa;
    }

    public void setRecompensa(double recompensa) {
        this.recompensa = recompensa;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
