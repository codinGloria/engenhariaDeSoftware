package com.codingloria.aula10.overload;

public class OverloadDemo {
    void ovlDemo(){
        System.out.println("No parameters");
    }

    void ovlDemo(int a){
        System.out.println("One parameter: " + a);
    }

    int ovlDemo(int a, int b){
        System.out.println("Two parameters: 1) " + a + " e 2) " + b);
        return a + b;
    }

    double ovlDemo(double a, double b){
        System.out.println("Two double parameters: 1) " + a + " e 2) " + b);
        return a + b;
    }

}
