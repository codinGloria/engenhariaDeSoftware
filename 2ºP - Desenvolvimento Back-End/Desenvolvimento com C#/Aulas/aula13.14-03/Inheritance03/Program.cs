using Inheritance03.Models;

namespace Inheritance03;

class Program {
    static void Main(string[] args) {
        Calculator calc = new Calculator(5, 2);
        Console.WriteLine("Add: " + calc.Add());
        Console.WriteLine("Add: " + calc.Add(10, 8));
        Console.WriteLine();

        ScientificCalculator sciCalc = new ScientificCalculator(20, 8);
        Console.WriteLine("Add: " + sciCalc.Add());
        Console.WriteLine("Add: " + sciCalc.Add(10, 10));
        Console.WriteLine();
        Console.WriteLine("Factorial: " + sciCalc.Factorial(4));
    }
}