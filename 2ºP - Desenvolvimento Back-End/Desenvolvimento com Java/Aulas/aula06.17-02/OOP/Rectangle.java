package com.codingloria.aula06.OOP;

public class Rectangle {
    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    public double getArea() {
        return this.width * this.height * hiddenValue();
    }

    private double hiddenValue(){
        return 28.0;
    }
}
