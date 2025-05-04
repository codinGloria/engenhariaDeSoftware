using OOPv4.models;

namespace OOPv4;

class Program {
    static void Main(string[] args) {
        Student[] students = new Student[3];
        double average;
        
        students = CreateStudents();
        
        foreach (Student student in students) {
            Console.WriteLine(student);
        }
        
        foreach (Student student in students) {
            average = (student.Grade1 + student.Grade2) / 2;
            Console.WriteLine("--------------------");
            if (average >= 6) {
                Console.WriteLine(student.Name + " approved! Average: " + average);
            } else {
                Console.WriteLine(student.Name + " reproved! Average: " + average);
            }
        }
    }
    
    public static Student[] CreateStudents() {
        Student[] students = new Student[3];
        
        students[0] = new Student("Zoro", 7, 6);
        students[1] = new Student("Nami", 8, 7);
        students[2] = new Student("Robin", 10, 10);
        
        return students;
    }
}