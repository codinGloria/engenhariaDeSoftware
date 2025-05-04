package com.codingloria.aula06;

public class CommonErrors {
    public static void main(String[] args) {
        int x = 3;
        while (x > 0) {
            System.out.println(x);
            x--;
        }
        // Problem!!! The while loop is infinite because the variable x is not being decremented

    }
}
