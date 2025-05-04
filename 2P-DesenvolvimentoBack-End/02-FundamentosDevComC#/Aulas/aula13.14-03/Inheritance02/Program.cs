using Inheritance02.Models;

namespace Inheritance02;

class Program {
    static void Main(string[] args) {
        Person person = new Person("Mirko", "Slipknot Avenue", "123456789");
        Console.WriteLine(person.ToString());
        Console.WriteLine();
        
        Student student = new Student("Izuku", "Scorpions Street", "987654321", "Initial Hero");
        Console.WriteLine(student.ToString());
        Console.WriteLine();
        
        Employee employee = new Employee("All Might", "Avenge Sevenfold St.", "123456789", "Instructor");
        Console.WriteLine(employee.ToString());
        Console.WriteLine();
        
        Professor professor = new Professor("Koro Sensei", "Konoha Street", "123456789", "Math");
        Console.WriteLine(professor.ToString());
    }
}