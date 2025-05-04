package com.codingloria.TP2.ex12;

import java.util.Random;

public class Dado {
    private static final Random random = new Random();

    public static int lancarDado() {
        return random.nextInt(6) + 1;
    }
}
