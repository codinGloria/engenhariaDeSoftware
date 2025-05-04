namespace Inheritance01.Models;

public class Employee {
    public string Name { get; set; }
    public string Address { get; set; }
    public string Phone { get; set; }
    public string Role { get; set; }
    
    public Employee(){}
    
    public Employee(string name, string address, string phone, string role) {
        Name = name;
        Address = address;
        Phone = phone;
        Role = role;
    }
    
    public override string ToString() {
        return $"Name: {Name}, Address: {Address}, Phone: {Phone}, Course: {Role}";
    }
}