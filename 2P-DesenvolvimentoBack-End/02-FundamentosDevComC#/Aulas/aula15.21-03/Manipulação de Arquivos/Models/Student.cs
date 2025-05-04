namespace File01.Models;

public class Student {
    public string Name { get; set; }
    public double Grade1 { get; set; }
    public double Grade2 { get; set; }

    public Student() {
        
    }
    
    public Student(string name, double grade1, double grade2) {
        Name = name;
        Grade1 = grade1;
        Grade2 = grade2;
    }
    
    public double CalculateAverage() {
        return (Grade1 + Grade2) / 2;
    }
    
    public override string ToString() {
        return $"Name: {Name}, Grade 1: {Grade1}, Grade 2: {Grade2}";
    }
}