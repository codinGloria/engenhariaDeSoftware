package com.codingloria.TP2.ex03;

public class ConversorMoeda {
    private static final double TAXA_DOLAR = 5.0;
    private static final double TAXA_EURO = 5.5;
    private static final double TAXA_LIBRA = 6.5;

    public static double converter(double valor, String moeda) {
        return switch (moeda.toLowerCase()) {
            case "dolar" -> valor / TAXA_DOLAR;
            case "euro" -> valor / TAXA_EURO;
            case "libra" -> valor / TAXA_LIBRA;
            default -> -1;
        };
    }
}
