namespace Inheritance02.Models;

public class Person {
    public string Name { get; set; }
    public string Address { get; set; }
    public string Phone { get; set; }
    
    public Person() { }
    
    public Person(string name, string address, string phone) {
        Name = name;
        Address = address;
        Phone = phone;
    }
    
    public override string ToString() {
        return $"Name: {Name}, Address: {Address}, Phone: {Phone}";
    }
}