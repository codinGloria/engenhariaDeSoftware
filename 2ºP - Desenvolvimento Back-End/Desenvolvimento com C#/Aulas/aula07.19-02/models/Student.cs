namespace OOPv1.models;

class Student {
    // Attributes or properties
    private string name;
    private double grade1;
    private double grade2;

    // Constructor
    public Student(){}
    
    public Student(string name, double grade1, double grade2) {
        this.name = name;
        this.grade1 = grade1;
        this.grade2 = grade2;
    }
    
    // Methods
    // Getters & Setters
    public void SetName(string name) {
        if (name.Length == 0) {
            return;
        }
        this.name = name;
    }
    
    public String GetName() {
        string[] nameLastName = name.Split(" ");
        string myName = nameLastName[0];
        string myLastName = nameLastName[1];
        return myLastName + ", " + myName;
    }

    public void SetGrade1(double grade1) {
        if (grade1 < 0) {
            return;
        }
        this.grade1 = grade1;
    }

    public double GetGrade1() {
        return grade1;
    }
    
    public void SetGrade2(double grade2) {
        if (grade2 < 0) {
            return;
        }
        this.grade2 = grade2;
    }

    public double GetGrade2() {
        return grade2;
    }
    
    
    public double CalculateAverage() {
        return (grade1 + grade2) / 2;
    }
}