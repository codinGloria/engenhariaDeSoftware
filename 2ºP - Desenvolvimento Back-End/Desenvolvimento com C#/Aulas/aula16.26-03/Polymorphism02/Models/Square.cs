namespace Polymorphism02.Models;

public class Square : Shape, IShape {
    
    public Square(){}
    
    public Square(double side) 
        : base (side){
    }
    
    public double CalculateArea() {
        return Width * Width;
    }
}