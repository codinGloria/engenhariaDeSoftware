namespace Calculadora8.Interfaces;

public interface ICalculate {
    public double Sum();
    public double Sum(double op1, double op2);
    public double Subtract();
    public double Subtract(double op1, double op2);
    public double Multiply();
    public double Multiply(double op1, double op2);
    public double Divide();
    public double Divide(double op1, double op2);
}