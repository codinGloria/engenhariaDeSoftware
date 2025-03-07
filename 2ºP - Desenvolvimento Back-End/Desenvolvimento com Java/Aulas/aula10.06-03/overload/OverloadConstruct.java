package com.codingloria.aula10.overload;

public class OverloadConstruct {
    int x;

    OverloadConstruct(){
        System.out.println("Constructor without parameters.");
        x = 0;
    }


    OverloadConstruct(int a){
        System.out.println("Constructor with one parameter: " + a);
        x = a;
    }

    OverloadConstruct(int a, int b){
        System.out.println("Constructor with two parameters: " + a + " e " + b);
        x = a * b;
    }

    OverloadConstruct(OverloadConstruct oc){
        System.out.println("Constructor with object: " + oc);
        x = oc.x;
    }

}
