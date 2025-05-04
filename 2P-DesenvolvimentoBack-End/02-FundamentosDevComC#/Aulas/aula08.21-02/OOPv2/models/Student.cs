namespace OOPv2.models;

class Student {
    public string Name { get; set; }
    public double Grade1 { get; set; }
    public double Grade2 { get; set; }

    public Student(){}
    
    public Student(string name, double grade1, double grade2) {
        Name = name;
        Grade1 = grade1;
        Grade2 = grade2;
    }
   
    public double CalculateAverage() {
        return (Grade1 + Grade2) / 2;
    }
    
    // Overriding
    public override string ToString() {
        return "------------------" + "\nName: " + Name + "\nGrade 1: " + Grade1 + "\nGrade 2: " + Grade2;
    }
}