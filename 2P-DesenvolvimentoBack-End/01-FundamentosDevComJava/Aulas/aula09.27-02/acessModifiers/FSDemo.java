package com.codingloria.aula09.acessModifiers;

public class FSDemo {
    public static void main(String[] args) {
        var fs = new ArrayFailSoft(5, -1);

        System.out.println("Array size: " + fs.length);

        for (int i = 0; i < fs.length * 2; i++) {
            var value = i * 10;
            if (!fs.put(i, value)) {
                System.out.println("Error inserting the value: " + value + " in the position: " + i);
            } else {
                System.out.println("Value inserted in position " + i + ": " + value);
            }
        }

        for (int i = 0; i < fs.length * 2; i++) {
            int val = fs.get(i);
            if (val != -1) {
                System.out.println("Value in position " + i + ": " + val);
            } else {
                System.out.println("Error getting the value in the position: " + i);
            }
        }
    }
}
