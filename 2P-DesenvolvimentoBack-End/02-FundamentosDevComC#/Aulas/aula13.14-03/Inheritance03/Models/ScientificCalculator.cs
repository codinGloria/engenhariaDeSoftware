namespace Inheritance03.Models;

public class ScientificCalculator : Calculator{
    
    public ScientificCalculator(){}
    
    public ScientificCalculator(double op1, double op2) 
        : base(op1, op2) { }

    public int Factorial(int n) {
        int result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}