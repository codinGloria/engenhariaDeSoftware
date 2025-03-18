package com.codingloria.TP3.ex10_11_12;

public class TestaFiguras {
    public static void main(String[] args) {
        Circulo circulo = new Circulo();
        Esfera esfera = new Esfera();

        circulo.raio = 3.0;
        esfera.raio = 5.0;

        System.out.println("Área do círculo: " + circulo.calculaArea());
        System.out.println("Volume da esfera: " + esfera.calculaVolume());
    }
}
