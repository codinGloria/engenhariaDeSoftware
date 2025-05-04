package com.codingloria.aula10.overload;

public class AutoConvertOverload {
    void f(int x){
        System.out.println("Inside f(int): " + x);
    }

    void f(double x){
        System.out.println("Inside f(double): " + x);
    }
}
