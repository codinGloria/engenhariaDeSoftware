namespace Bank02.Models;

public class Premium : Account, IAccount{
    public string Cpf { get; set; }
    public double SpecialLimit { get; set; }
    
    public Premium() {
    }
    
    public Premium(int id, string name, double balance, string cpf, double specialLimit) 
        : base(id, name, balance) {
        Cpf = cpf;
        SpecialLimit = specialLimit;
    }
    
    public double CalculateBalance() {
        return Balance + SpecialLimit;
    }
    
    public override string ToString() {
        return base.ToString() + $", Cpf: {Cpf}, SpecialLimit: {SpecialLimit}";
    }
}