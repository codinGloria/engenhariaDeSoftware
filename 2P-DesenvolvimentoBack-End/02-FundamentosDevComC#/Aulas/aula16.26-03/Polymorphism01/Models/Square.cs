namespace Polymorphism01.Models;

public class Square : Shape {
    
    public Square(){}
    
    public Square(double side) 
        : base (side){
    }
    
    public override double CalculateArea() {
        return Width * Width;
    }
}