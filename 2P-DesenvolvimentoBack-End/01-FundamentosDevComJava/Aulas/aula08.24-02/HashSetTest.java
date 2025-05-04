package com.codingloria.aula08;

import java.util.HashSet;

public class HashSetTest {
    public static void main(String[] args) {
        HashSet<Car> cars = new HashSet<>();

        Car car1 = new Car("Omega", 1994);
        Car car2 = new Car("Opala", 1980);
        Car car3 = new Car("Omega", 1994);

        cars.add(car1);
        cars.add(car2);
        cars.add(car3);

        System.out.println("Number of cars: " + cars.size());
    }
}
