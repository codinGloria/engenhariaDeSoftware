using File01.Models;

namespace File01;

class Program {
    
    const string ARQ = "C:\\Users\\Glória\\Downloads\\File\\File01\\students.csv";

    static void Main(string[] args) {
        List<Student> students = ReadFile();
        Console.WriteLine("Students:");
        ExhibitStudents(students);
    }

    public static void ExhibitStudents(List<Student> students) {
        foreach (var student in students) {
            Console.WriteLine(student);
        }
    }
    
    public static List<Student> ReadFile() {
        var students = new List<Student>();
        
        try {
            string line;
            // Open
            using (var file = new StreamReader(ARQ)) {
                line = file.ReadLine();
                while (line != null) { // null = EOF
                    string[] fields = line.Split(',');
                    
                    string name = fields[0];
                    double grade1 = double.Parse(fields[1]);
                    double grade2 = double.Parse(fields[2]);
                    students.Add(new Student(name, grade1, grade2));
                    
                    line = file.ReadLine();
                }
            }
        }
        catch (Exception e) {
            Console.WriteLine(e);
        }

        return students;
    }
}