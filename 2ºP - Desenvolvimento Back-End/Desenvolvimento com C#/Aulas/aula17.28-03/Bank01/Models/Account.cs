namespace Bank01.Models;

public abstract class Account {
    public int Id { get; set; }
    public string Name { get; set; }
    public double Balance { get; set; }
    
    public Account(){}
    
    public Account(int id, string name, double balance) {
        Id = id;
        Name = name;
        Balance = balance;
    }
    
    public void Deposit(double amount) {
        Balance += amount;
    }
    
    public void Withdraw(double amount) {
        if (amount > Balance) {
            Console.WriteLine("Insufficient funds");
        } else {
            Balance -= amount;
        }
    }
    
    public abstract double CalculateBalance();
    
    public override string ToString() {
        return $"Account ID: {Id}, Name: {Name}, Balance: {Balance}";
    }
}