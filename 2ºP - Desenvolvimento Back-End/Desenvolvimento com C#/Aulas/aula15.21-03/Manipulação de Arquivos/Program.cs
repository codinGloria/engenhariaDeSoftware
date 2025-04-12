using File01.Models;

namespace File01;

class Program {
    
    const string FILE = "C:\\Users\\Glória\\Downloads\\File\\File01\\students.csv";
    const string FILE_AVG = "C:\\Users\\Glória\\Downloads\\File\\File01\\average.csv";
    
    static void Main(string[] args) {
        List<Student> students = ReadFile();
        Console.WriteLine("Students:");
        ExhibitStudents(students);
        SaveAverage(students);
    }
    
    public static void SaveAverage(List<Student> students) {
        try {
            using (var file = new StreamWriter(FILE_AVG)) {
                foreach (var student in students) {
                    double average = student.CalculateAverage();
                    file.WriteLine($"{student.Name},{average}");
                }
                Console.WriteLine("Average saved to file.");
            }
        }
        catch (Exception e) {
            Console.WriteLine(e);
        }
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
            using (var file = new StreamReader(FILE)) {
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