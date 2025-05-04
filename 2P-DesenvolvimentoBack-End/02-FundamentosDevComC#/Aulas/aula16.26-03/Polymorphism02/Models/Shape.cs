namespace Polymorphism02.Models;

public abstract class Shape {
    public double Width { get; set; }
    public double Height { get; set; }
    
    public Shape() {}
    
    public Shape(double width) {
        Width = width;
    }
    
    public Shape(double width, double height) {
        Width = width;
        Height = height;
    }
}