namespace Inheritance02.Models;

public class Professor : Person {
    public string CourseMinistraded { get; set; }
    
    public Professor(){}
    
    public Professor(string name, string address, string phone, string courseMinistraded) 
        : base(name, address, phone) {
        CourseMinistraded = courseMinistraded;
    }
    
    public override string ToString() {
        return base.ToString() + $", Course Ministraded: {CourseMinistraded}";
    }
}