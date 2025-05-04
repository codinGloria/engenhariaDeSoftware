namespace exception02;

class Program {
    static void Main(string[] args) {
        int op1 = 4, op2 = 0;
        double result;

        try {
            result = op1 / op2;
            Console.WriteLine("Result: " + result);
        }
        catch (DivideByZeroException) {
            Console.WriteLine("Error: division by zero.");
        }
    }
}