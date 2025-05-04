namespace Inheritance01.Models;

public class Student {
    public string Name { get; set; }
    public string Address { get; set; }
    public string Phone { get; set; }
    public string Course { get; set; }
    
    public Student(){}
    
    public Student(string name, string address, string phone, string course) {
        Name = name;
        Address = address;
        Phone = phone;
        Course = course;
    }
    
    public override string ToString() {
        return $"Name: {Name}, Address: {Address}, Phone: {Phone}, Course: {Course}";
    }
}