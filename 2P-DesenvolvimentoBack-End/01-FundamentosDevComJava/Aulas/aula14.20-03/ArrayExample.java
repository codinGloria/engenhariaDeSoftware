package com.codingloria.aula14;

public class ArrayExample {
    public static void main(String[] args) {
        //temperatureExample();
        double[] balances = { 1000.0, 2500.02, 230.43, 10000.23, 500.0 };

        for (double balance : balances) {
            if (balance > 1000) {
                System.out.println("Balance greater than one thousand: R$ " + balance);
            }
        }
    }

    private static void temperatureExample() {
        double[] temperatures = new double[30];

        temperatures[0] = 23.4;
        temperatures[1] = 24.4;
        temperatures[2] = 33.5;
        temperatures[3] = 13.0;
        //...

        double sum = 0;
        for (int i = 0; i < temperatures.length; i++) {
            sum += temperatures[i];
        }
        double average = sum / temperatures.length;
        System.out.println("Average temperature: " + average);
    }
}
