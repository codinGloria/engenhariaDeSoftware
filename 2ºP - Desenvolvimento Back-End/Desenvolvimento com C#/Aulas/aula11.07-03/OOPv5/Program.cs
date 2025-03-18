using OOPv5.models;

namespace OOPv5;

class Program {
    static void Main(string[] args) {
        List<Student> students = new List<Student>();

        students = EnterStudents();
        PrintStudents(students);
        ShowAprroval(students);
    }

    public static List<Student> EnterStudents() {
        const string FLAG = "EXIT";
        
        List<Student> students = new List<Student>();
        
        double grade1, grade2;
        string name = EnterName();
        
        while (name.ToUpper() != FLAG) {
            grade1 = EnterGrade("Enter the first grade: ");
            grade2 = EnterGrade("Enter the second grade: ");
            
            Student student = new Student(name, grade1, grade2);
            students.Add(student);
            
            name = EnterName();
        }

        return students;
    }
    
    public static string EnterName() {
        Console.Write("\nEnter the name: ");
        string name = Console.ReadLine();
        return name;
    }
    
    public static double EnterGrade(string msg) {
        double grade;
        do {
            try {
                Console.Write(msg);
                grade = double.Parse(Console.ReadLine());
                break;
            } catch (FormatException) {
                Console.WriteLine("Invalid input. Try again.");
            }
        } while (true);
        
        return grade;
    }
    
    public static void PrintStudents(List<Student> students) {
        Console.WriteLine("\n---- Students list ----");
        foreach (Student student in students) {
            Console.WriteLine(student);
        }
    }
    
    public static void ShowAprroval(List<Student> students) {
        Console.WriteLine("\n---- Students Aprroval list ----");
        double average;
        
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
}