namespace Inheritance03.Models;

public class Calculator {
    public double Op1 { get; set; }
    public double Op2 { get; set; }
    
    public Calculator(){}
    
    public Calculator(double op1, double op2) {
        Op1 = op1;
        Op2 = op2;
    }
    
    public double Add() {
        return Op1 + Op2;
    }
    
    public double Add(double op1, double op2) {
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
        if (Op2 == 0) {
            throw new DivideByZeroException("Cannot divide by zero.");
        }
        return Op1 / Op2;
    }
    
    public double Divide(double op1, double op2) {
        if (op2 == 0) {
            throw new DivideByZeroException("Cannot divide by zero.");
        }
        return op1 / op2;
    }
}