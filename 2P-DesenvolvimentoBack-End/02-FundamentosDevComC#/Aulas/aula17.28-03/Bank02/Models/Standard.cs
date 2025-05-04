namespace Bank02.Models;

public class Standard : Account, IAccount{
    
    public string Cpf { get; set; }
    
    public Standard(){}
    
    public Standard(int id, string name, double balance, string cpf) 
        : base(id, name, balance) {
        Cpf = cpf;
    }

    public double CalculateBalance() {
        return Balance;
    }
    
    public override string ToString() {
        return base.ToString() + $", Cpf: {Cpf}";
    }
}