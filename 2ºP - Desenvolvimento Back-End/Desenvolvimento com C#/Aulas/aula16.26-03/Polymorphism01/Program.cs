using Polymorphism01.Models;

namespace Polymorphism01;

class Program {
    static void Main(string[] args) {
        var shapes = new Shape[3];
        
        shapes[0] = new Square(5);
        shapes[1] = new Rectangle(5, 10);
        shapes[2] = new Triangle(18, 10);
        
        foreach (var shape in shapes) {
            Console.WriteLine($"Area: {shape.CalculateArea()}");
        }
    }
}