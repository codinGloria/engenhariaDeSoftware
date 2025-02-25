using Calculator06.Models;

namespace Calculator06;

class Program {
    static void Main(string[] args) {
        Calculate calc1 = new Calculate(20, 8);
        
        Calculate calc2 = new Calculate();
        calc2.Op1 = 10;
        calc2.Op2 = 2;
        
        Console.WriteLine("Add = " + calc1.Add());
        Console.WriteLine("Subtract = " + calc1.Subtract());
        Console.WriteLine("Multiply = " + calc1.Multiply());
        Console.WriteLine("Divide = " + calc1.Divide());

        Console.WriteLine("----------------------");
        Console.WriteLine("Add = " + calc2.Add(calc2.Op1, calc2.Op2));
    }
}