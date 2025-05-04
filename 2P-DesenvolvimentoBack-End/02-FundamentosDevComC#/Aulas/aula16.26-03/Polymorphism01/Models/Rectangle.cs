namespace Polymorphism01.Models;

public class Rectangle : Shape {
    
    public Rectangle() {}
    
    public Rectangle(double width, double height) 
        : base(width, height){}
    
    public override double CalculateArea() {
        return Width * Height;
    }
}