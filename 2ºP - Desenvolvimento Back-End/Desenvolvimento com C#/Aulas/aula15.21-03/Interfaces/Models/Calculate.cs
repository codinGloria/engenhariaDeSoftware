using Calculadora8.Interfaces;

namespace Calculadora8.Models;

public class Calculate : ICalculate{
    public double Op1 { get; set; }
    public double Op2 { get; set; }

    public Calculate() { }

    public Calculate(double op1, double op2) {
        Op1 = op1;
        Op2 = op2;
    }

    public double Sum() {
        return Op1 + Op2;
    }

    public double Sum(double op1, double op2) {
        return op1 + op2;
    }

    public double Subtract() {
        return Op1 - Op2;
    }

    public double Subtract(double op1, double op2) {
        return op1 - op2;
    }

    public double Multiply() {
        return Op1 * Op2;
    }

    public double Multiply(double op1, double op2) {
        return op1 * op2;
    }

    public double Divide() {
        return Op1 / Op2;
    }

    public double Divide(double op1, double op2) {
        return op1 / op2;
    }
}