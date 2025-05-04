package com.codingloria.TP2.ex10;

public class ConversorTempo {
    public static String converterMinutosParaHoras(int minutos) {
        int horas = minutos / 60;
        int minutosRestantes = minutos % 60;
        return horas + " hora(s) e " + minutosRestantes + " minuto(s)";
    }
}