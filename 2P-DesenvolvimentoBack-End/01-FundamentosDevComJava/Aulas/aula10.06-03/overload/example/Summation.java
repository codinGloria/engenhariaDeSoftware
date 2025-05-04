package com.codingloria.aula10.overload.example;

public class Summation {
    int sum;

    Summation (int num){
        sum = 0;
        for (int i = 1; i <= num; i++){
            sum += i;
        }
    }

    Summation (Summation ob){
        sum = ob.sum;
    }

    public static void main(String[] args) {
        Summation s1 = new Summation(5);
        Summation s2 = new Summation(s1);

        System.out.println("s1: " + s1.sum);
        System.out.println("s2: " + s2.sum);
    }
}
