namespace Inheritance02.Models;

public class Employee : Person {
    public string Role { get; set; }
    
    public Employee(){}
    
    public Employee(string name, string address, string phone, string role)
        : base (name, address, phone) {
        Role = role;
    }
    
    public override string ToString() {
        return base.ToString() + $", Role: {Role}";
    }
}