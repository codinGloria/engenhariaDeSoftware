package com.gloriabraz.variables;

public class BooleanDemo {
    public static void main(String[] args) {
        boolean status = true;
        System.out.println("The status is: " + status);

        status = false;
        System.out.println("The status is: " + status);

        if (status) {
            System.out.println("If it's true, this statement will be executed");
        }

        if (status == true){
            System.out.println("This condition is redundant, prefer to use only the variable name");
        }

        status = (10 > 9);
        System.out.println("10 is greater than 9? " + status);
    }
}
