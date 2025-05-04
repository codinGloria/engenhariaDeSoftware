package com.codingloria.aula15;

public class ArrayExample02 {
    public static void main(String[] args) {
        int[] sample;
        sample = new int[10];
        var first = sample[0];
        var last = sample[9];
        for (int i = 0; i < 10; i++) {
            sample[i] = i + 50;
        }
        for (int i = 0; i < 10; i++) {
            System.out.println("sample[" + i + "] = " + sample[i]);
        }
    }
}
