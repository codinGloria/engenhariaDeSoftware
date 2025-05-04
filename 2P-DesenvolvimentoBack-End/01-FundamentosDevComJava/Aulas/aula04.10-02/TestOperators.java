package com.codingloria.aula04;

public class TestOperators {
    public static void main(String[] args) {
        // Arithmetic operators
        System.out.println("******** Arithmetic operators ********");

        int a = 10;
        int b = 2;

        System.out.println("Sum: " + (a + b));
        System.out.println("Difference: " + (a - b));
        System.out.println("Product: " + (a * b));
        System.out.println("Quotient: " + (a / b));
        System.out.println("Remainder: " + (a % b));
        System.out.println("Quotient with  " + (10.0 / 3.0));

        // Assignment operators
        System.out.println("******** Assignment operators ********");

        int c = 6;
        System.out.println("Initial value: " + c);

        c += 2; // c = c + 2
        System.out.println("After c += 2: " + c);

        c -= 2; // c = c - 2
        System.out.println("After c -= 2: " + c);

        c *= 2; // c = c * 2
        System.out.println("After c *= 2: " + c);

        c /= 2; // c = c / 2
        System.out.println("After c /= 2: " + c);

        // Increment and decrement operators
        System.out.println("******** Increment and decrement operators ********");

        int d = 10;

        System.out.println("Initial value: " + d); // 10
        System.out.println("Pre-increment: " + (++d)); // 11
        System.out.println("Post-increment: " + (d++)); // 11
        System.out.println("Final value: " + d); // 12

        // Relational operators
        System.out.println("******** Relational operators ********");
        System.out.println("a > b: " + (a > b));
        System.out.println("a < b: " + (a < b));
        System.out.println("a >= b: " + (a >= b));
        System.out.println("a <= b: " + (a <= b));
        System.out.println("a == b: " + (a == b));
        System.out.println("a != b: " + (a != b));

        // Logical operators
        System.out.println("******** Logical operators ********");

        boolean cond1 = true;
        boolean cond2 = false;
        System.out.println("true && false: " + (cond1 && cond2));
        System.out.println("true || false: " + (cond1 || cond2));
        System.out.println("!true: " + (!cond1));
        System.out.println("true ^ false (XOR): " + (cond1 ^ cond2));

        // Short-circuit operators
        System.out.println("******** Short-circuit operators ********");

        int n = 10;
        int e = 0;

        if (e != 0 || (n / e) > 2) {
            System.out.println("Not dividing by zero");
        } else {
            System.out.println("Dividing by zero");
        }

    }
}
