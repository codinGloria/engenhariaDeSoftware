package com.codingloria.aula16;

public class TryExamples {
    public static void main(String[] args) {
        System.out.println("Program start");
        int result = 10 / 1;
        System.out.println("Mid-program result: " + result);

        // arrayOutOfBounds();

        try {
            int x = Integer.parseInt("abss");
        } catch (NumberFormatException ex) {
            System.out.println("Error: Invalid number");
        } catch (ArrayIndexOutOfBoundsException ex) {
            System.out.println("Error: Invalid index");
        } catch (Exception ex) {
            System.out.println("Error: Unknown error");
        } finally {
            System.out.println("I am always executed!");
        }

        System.out.println("Program end");
    }

    private static void arrayOutOfBounds() {
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]);
        } catch (ArrayIndexOutOfBoundsException ex) {
            System.out.println("Error: Invalid index");
        } finally {
            System.out.println("I am always executed!");
        }
    }
}
