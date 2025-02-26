package com.codingloria.aula08;

public class CarTest {
    public static void main(String[] args) {
        Car car1 = new Car("Omega", 1994);
        Car car3 = new Car("Omega", 1994);
        Car car2 = new Car("Opala", 1980);

        car1.toString(); // returns the object's memory address or the object's attributes if it's overridden
        car1.equals(car3); // compares the memory address of the objects
        car1.hashCode(); // returns the object's memory address

        System.out.println(car1);
        System.out.println(car2);

        System.out.println("Equals: " + car1.equals(car3));
    }
}
