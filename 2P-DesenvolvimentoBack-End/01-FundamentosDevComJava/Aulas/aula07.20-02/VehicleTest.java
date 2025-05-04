package com.codingloria.aula07.oop;

public class VehicleTest {
    public static void main(String[] args) {
        Vehicle car1 = new Vehicle(5, 50, 12);
        Vehicle car2 = new Vehicle(2, 35, 20);

        car1.showCar();
        car1.showAutonomy();
        car2.showCar();
        car2.showAutonomy();

        int autonomyCar1 = car1.calculateAutonomy();
        System.out.println("\nAutonomy of car1: " + autonomyCar1 + " km");

        Vehicle car3 = new Vehicle(5, 60, 16);
        car3.fuelConsumption = 10;

        car3.showCar();

        int distance = car3.calculateDistance(10);
        System.out.println("\nThe car can travel " + distance + " km with 10 liters of fuel");
    }
}
