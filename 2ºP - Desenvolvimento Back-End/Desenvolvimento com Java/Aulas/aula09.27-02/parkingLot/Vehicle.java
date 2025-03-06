package com.codingloria.aula08.parkingLot;

public class Vehicle {
    private String licensePlate;
    private String model;
    private long entryTime;

    public Vehicle(String licensePlate, String model) {
        this.licensePlate = licensePlate;
        this.model = model;
        this.entryTime = System.currentTimeMillis();
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public long getEntryTime() {
        return entryTime;
    }

    public long calculateTime() {
        long exitTime = System.currentTimeMillis();
        return (exitTime - this.entryTime) / (1000 * 60 * 60);
    }

    public Boolean isSameVehicle(String licensePlate) {
        return this.licensePlate.equalsIgnoreCase(licensePlate);
    }


}
