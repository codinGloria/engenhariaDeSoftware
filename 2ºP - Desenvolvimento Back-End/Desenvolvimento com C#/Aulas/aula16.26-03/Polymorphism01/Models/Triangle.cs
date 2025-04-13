namespace Polymorphism01.Models;

public class Triangle : Shape{
    
    public Triangle() {}
    
    public Triangle(double width, double height) 
        : base(width, height){}
    
    public override double CalculateArea() {
        return (Width * Height) / 2;
    }
}