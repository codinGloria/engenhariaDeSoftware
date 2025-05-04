namespace exception01;

class Program {
    static void Main(string[] args) {
        int num = 0;

        do {
            try {
                Console.Write("Enter a number: ");
                num = int.Parse(Console.ReadLine());
                break;
            }
            catch (FormatException) {
                Console.WriteLine("Error: invalid number.");
            }
        } while (true);

        Console.WriteLine(num);
    }
}