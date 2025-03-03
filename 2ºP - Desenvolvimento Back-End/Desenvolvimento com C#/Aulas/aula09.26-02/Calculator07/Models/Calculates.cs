namespace Calculator07.Models;

class Calculates {
    public double Op1 { get; set; }
    public double Op2 { get; set; }
    
    public Calculates(){}
    
    public Calculates(double op1, double op2) {
        Op1 = op1;
        Op2 = op2;
    }
    
    public double Add(double op1, double op2) {
        return op1 + op2;
    }
    
    public double Subtract(double op1, double op2) {
        return op1 - op2;
    }
    
    public double Multiply(double op1, double op2) {
        return op1 * op2;
    }
    
    public double Divide(double op1, double op2) {
        return op1 / op2;
    }
}