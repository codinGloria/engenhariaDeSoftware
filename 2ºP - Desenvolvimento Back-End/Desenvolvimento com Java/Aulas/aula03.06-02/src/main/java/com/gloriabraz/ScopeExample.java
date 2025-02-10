package com.gloriabraz;

public class ScopeExample {
    public static void main(String[] args) {
        int x = 10;
        System.out.println("The value of x is: " + x);

        if(x > 0){
            int y = 100;
            System.out.println("The value of y is: " + y);
        }

        method();
        System.out.println("The value of y is: " + y); // Error: cannot find symbol, because y is out of scope (declared inside the if block)
    }

    public static void method(){
        System.out.println("The value of x is: " + x); // Error: cannot find symbol, because x is out of scope (declared in another method)
    }
}
