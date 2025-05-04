package com.codingloria.aula07.oop;

public class TicketReferenceTest {
    static void increaseVelocity(Vehicle vehicle) {
        vehicle.velocity += 20;
        System.out.println("Velocity inside the method: " + vehicle.velocity);
    }

    public static void main(String[] args) {
        Vehicle car = new Vehicle(10, 10, 10);
        car.velocity = 100;
        System.out.println("Velocity before the method: " + car.velocity);
        increaseVelocity(car);
        System.out.println("Velocity after the method: " + car.velocity);
    }
}
