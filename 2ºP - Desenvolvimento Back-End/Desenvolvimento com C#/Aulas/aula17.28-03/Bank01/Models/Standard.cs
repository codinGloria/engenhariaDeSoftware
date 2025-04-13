namespace Bank01.Models;

public class Standard : Account{
    
    public string Cpf { get; set; }
    
    public Standard(){}
    
    public Standard(int id, string name, double balance, string cpf) 
        : base(id, name, balance) {
        Cpf = cpf;
    }

    public override double CalculateBalance() {
        return Balance;
    }
    
    public override string ToString() {
        return base.ToString() + $", Cpf: {Cpf}";
    }
}