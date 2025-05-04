package com.codingloria.aula08;

import java.util.Objects;

public class Car {
    String model;
    int year;

    public Car(String model, int year) {
        this.model = model;
        this.year = year;
    }

    @Override
    public String toString() {
        // return "Car: model: " + model + ", year: " + year + "]";
        return  "{\"Car\": \"" + model + "\", \"year\": \"" + year + "\"}"; // in json format
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        Car other = (Car) obj;
        return model.equals(other.model) && year == other.year;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(model) + Objects.hashCode(year);
    }
}
