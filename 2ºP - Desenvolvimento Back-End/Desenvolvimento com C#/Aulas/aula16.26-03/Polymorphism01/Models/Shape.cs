namespace Polymorphism01.Models;

public abstract class Shape {
    public double Width { get; set; }
    public double Height { get; set; }
    
    // Overloaded constructors = static polymorphism
    
    public Shape() {}
    
    public Shape(double width) {
        Width = width;
    }
    
    public Shape(double width, double height) {
        Width = width;
        Height = height;
    }
    
    // Override = dynamic polymorphism
    
    public abstract double CalculateArea();
}