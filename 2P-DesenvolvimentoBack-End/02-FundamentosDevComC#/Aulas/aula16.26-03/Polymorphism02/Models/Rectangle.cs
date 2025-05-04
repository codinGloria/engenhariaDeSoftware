namespace Polymorphism02.Models;

public class Rectangle : Shape, IShape {
    
    public Rectangle() {}
    
    public Rectangle(double width, double height) 
        : base(width, height){}
    
    public double CalculateArea() {
        return Width * Height;
    }
}