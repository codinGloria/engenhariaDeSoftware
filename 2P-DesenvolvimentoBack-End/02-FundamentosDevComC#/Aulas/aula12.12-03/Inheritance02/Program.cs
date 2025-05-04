using Inheritance02.Models;

namespace Inheritance02;

class Program {
    static void Main(string[] args) {
        Person person = new Person("John Doe", "123 Main St", "555-1234");
        Console.WriteLine(person.ToString());
    }
}