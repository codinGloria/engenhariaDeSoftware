using Calculator07.Models;

namespace Calculator07;

class Program {
    static void Main(string[] args) {
        const int EXIT = 0;
        double op1, op2;
        int option = EnterOption();

        while (option != EXIT) {
            op1 = EnterOp();
            op2 = EnterOp();
            
            Calculate(option, op1, op2);
            
            option = EnterOption();
        }

        Console.WriteLine("Out of the loop!");
    }
    
    public static void Calculate(int option, double op1, double op2) {
        Calculates calc = new Calculates(op1, op2);
        double result;
        
        switch (option) {
            case 1:
                result = calc.Add(op1, op2);
                Console.WriteLine("Sum: " + result);
                break;
            case 2:
                result = calc.Subtract(op1, op2);
                Console.WriteLine("Subtraction: " + result);
                break;
            case 3:
                result = calc.Multiply(op1, op2);
                Console.WriteLine("Multiplication: " + result);
                break;
            case 4:
                if (op2 != 0) {
                    result = calc.Divide(op1, op2);
                    Console.WriteLine("Division: " + result);
                } else {
                    Console.WriteLine("Division by zero is not allowed!");
                }
                break;
            default: 
                Console.WriteLine("Invalid option!"); 
                break;
        }
    }

    public static void Menu() {
        Console.WriteLine("\n########## Calculator ##########");
        Console.WriteLine("[1] Add");
        Console.WriteLine("[2] Subtract");
        Console.WriteLine("[3] Multiply");
        Console.WriteLine("[4] Divide");
        Console.WriteLine("[0] Exit");
        Console.WriteLine("Enter the option number: ");
    }
    
    public static bool ValidateOption(int option) {
        return (option >= 0) && (option <= 4);
    }
    
    public static int EnterInt() {
        int option;
        
        do {
            try {
                option = int.Parse(Console.ReadLine());
                break;
            }
            catch (FormatException) {
                Console.WriteLine("Invalid value! Try again.");
                Menu();
            }
        } while (true);
        
        return option;
    }
    
    public static int EnterOption() {
        int option;
        
        do {
            Menu();
            option = EnterInt();
            if (ValidateOption(option)) {
                break;
            } else {
                Console.WriteLine("Invalid option!");
            }
        } while (true);

        return option;
    }
    
    public static double EnterOp() {
        double op;

        do {
            try {
                Console.Write("Enter a number: ");
                op = double.Parse(Console.ReadLine());
                break;
            }
            catch (FormatException) {
                Console.WriteLine("Invalid number! Try again.");
            }
        } while (true);
        return op;
    }
}