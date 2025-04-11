namespace Inheritance01.Models;

public class Professor {
    public string Name { get; set; }
    public string Address { get; set; }
    public string Phone { get; set; }
    public string CourseMinistraded { get; set; }
    
    public Professor(){}
    
    public Professor(string name, string address, string phone, string courseMinistraded) {
        Name = name;
        Address = address;
        Phone = phone;
        CourseMinistraded = courseMinistraded;
    }
    
    public override string ToString() {
        return $"Name: {Name}, Address: {Address}, Phone: {Phone}, Course: {CourseMinistraded}";
    }
}