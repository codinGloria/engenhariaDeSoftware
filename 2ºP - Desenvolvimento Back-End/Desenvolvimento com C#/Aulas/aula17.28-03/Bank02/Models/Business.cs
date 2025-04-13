namespace Bank02.Models;

public class Business : Account, IAccount{
    
    public string Cnpj { get; set; }
    
    public Business(){}
    
    public Business(int id, string name, double balance, string cnpj) 
        : base(id, name, balance) {
        Cnpj = cnpj;
    }
    
    public double CalculateBalance() {
        return Balance + (Balance * 0.1);
    }
    
    public override string ToString() {
        return base.ToString() + $", Cnpj: {Cnpj}";
    }
    
}