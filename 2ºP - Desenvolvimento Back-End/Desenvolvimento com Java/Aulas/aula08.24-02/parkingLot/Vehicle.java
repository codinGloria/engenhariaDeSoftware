package com.codingloria.aula08.parkingLot;

public class Vehicle {
    String licensePlate;
    String model;
    long entryTime;

    public Vehicle(String licensePlate, String model, long entryTime) {
        this.licensePlate = licensePlate;
        this.model = model;
        this.entryTime = entryTime;
    }

    public long calculateTime() {
        long exitTime = System.currentTimeMillis();
        return (exitTime - this.entryTime) / (1000 * 60 * 60);
    }

}
