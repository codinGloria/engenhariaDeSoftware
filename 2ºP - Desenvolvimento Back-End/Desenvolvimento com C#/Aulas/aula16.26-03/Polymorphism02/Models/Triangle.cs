namespace Polymorphism02.Models;

public class Triangle : Shape, IShape{
    
    public Triangle() {}
    
    public Triangle(double width, double height) 
        : base(width, height){}
    
    public double CalculateArea() {
        return (Width * Height) / 2;
    }
}