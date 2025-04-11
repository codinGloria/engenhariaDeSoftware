namespace Inheritance02.Models;

public class Student : Person {
    public string Course { get; set; }
    
    public Student(){}
    
    public Student(string name, string address, string phone, string course)
        : base(name, address, phone) {
        Course = course;
    }
    
    public override string ToString() {
        return base.ToString() + $", Course: {Course}";
    }
}