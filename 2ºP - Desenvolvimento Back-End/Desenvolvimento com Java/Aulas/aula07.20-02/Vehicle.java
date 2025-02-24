package com.codingloria.aula07.oop;

public class Vehicle {
    int passengers; // number of passengers
    int fuelCapacity; // fuel capacity in liters
    int fuelConsumption; // fuel consumption in km/l
    int velocity; // velocity in km/h

    // Constructor
    Vehicle(int passengers, int fuelCapacity, int fuelConsumption) {
        this.passengers = passengers;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    }

    void acelerate() {
        this.velocity += 10;
    }

    void showCar() {
        System.out.println("----------------------");
        System.out.println("Number of passengers: " + passengers);
        System.out.println("Fuel capacity: " + fuelCapacity);
        System.out.println("Fuel consumption: " + fuelConsumption);
    }
    void showAutonomy() {
        System.out.println("Autonomy is " + fuelCapacity * fuelConsumption + " km");
    }

    int calculateAutonomy() {
        return fuelCapacity * fuelConsumption;
    }

    void verifyAutonomy(int autonomy) {
        if (autonomy < 50) {
            System.out.println("You need to refuel!");
            return;
        }
        System.out.println("You're good to go!");
    }

    int calculateDistance(int liters) {
        return liters * fuelConsumption;
    }

    String verifyFuel(double liters) {
        if (liters <= 0) {
            return "Empty tank!";
        } else if (liters < 10) {
            return "You need to refuel!";
        } else {
            return "You're good to go!";
        }
    }
}
