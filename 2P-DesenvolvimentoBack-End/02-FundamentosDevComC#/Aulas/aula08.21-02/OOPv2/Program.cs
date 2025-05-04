using OOPv2.models;

namespace OOPv2;

class Program {
    static void Main(string[] args) {
        Student student1 = new Student("Glória Braz", 10, 8); 
        Console.WriteLine(student1.Name + ": " + student1.Grade1 + ", " + student1.Grade2);
        Console.WriteLine("Average = " + student1.CalculateAverage());
        Console.WriteLine();

        Student student2 = new Student();
        student2.Name = "Luan Felipe";
        student2.Grade1 = 8;
        student2.Grade2 = 7;
        Console.WriteLine(student2.Name + ": " + student2.Grade1 + ", " + student2.Grade2);
        Console.WriteLine("Average = " + student2.CalculateAverage());
        Console.WriteLine();
    }
}