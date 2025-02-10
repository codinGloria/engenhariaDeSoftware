package com.gloriabraz.variables;

public class StringDemo {
    public static void main(String[] args) {
        String message = "Welcome ".concat("to the Java world").concat("!");
        System.out.println(message);

        // Var is a local variable type, which means that the type of the variable is inferred by the compiler
        var message2 = "Line 1\nLine 2"; // We need to use the escape character '\n' to print a new line
        System.out.println(message2);

        var message3 = "Line 3 \'Line 4\'"; // We need to use the escape character '\' to print the single quote or other special characters

        var message4; // Compile error: cannot use 'var' on variable without initializer


    }
}
