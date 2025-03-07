package com.codingloria.TP2.ex07;

public class ConversorTemperatura {
    public static double celsiusParaFahrenheit(double celsius) {
        return (celsius * 9/5) + 32;
    }

    public static double fahrenheitParaCelsius(double fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }
}
