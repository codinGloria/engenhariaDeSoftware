using OOPv1.models;

namespace OOPv1 {
    internal class Program {
        static void Main(string[] args) {
            Student student3 = new Student("Neide Fonseca", 6, 8); // This is the instantiation of the Student class
            Student student1 = new Student();
            student1.SetName("Glória Braz");
            student1.SetGrade1(8);
            student1.SetGrade2(10);
            Console.WriteLine(student1.GetName() + ": " + student1.GetGrade1() + ", " + student1.GetGrade2());
            Console.WriteLine("Average = " + student1.CalculateAverage());
            Console.WriteLine();

            Student student2 = new Student();
            student2.SetName("Luan Felipe");
            student2.SetGrade1(8);
            student2.SetGrade2(7);
            Console.WriteLine(student2.GetName() + ": " + student2.GetGrade1() + ", " + student2.GetGrade2());
            Console.WriteLine("Average = " + student2.CalculateAverage());
            Console.WriteLine();

            Console.WriteLine(student3.GetName() + ": " + student3.GetGrade1() + ", " + student3.GetGrade2());
            Console.WriteLine("Average = " + student3.CalculateAverage());
            
        }
    }
}