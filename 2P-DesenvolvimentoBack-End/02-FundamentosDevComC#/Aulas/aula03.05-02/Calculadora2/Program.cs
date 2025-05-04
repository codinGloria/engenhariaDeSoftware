namespace Calculadora2 {
    internal class Program {
        static void Main(string[] args) {
            
            // Operadores relacionais
            
            /*
            double op1 = 6, op2 = 4;
            
            Console.WriteLine(op1 > op2);
            Console.WriteLine(op1 >= op2);
            Console.WriteLine(op1 < op2);
            Console.WriteLine(op1 <= op2);
            Console.WriteLine(op1 == op2);
            Console.WriteLine(op1 != op2);
            */
            
            // Operadores lógicos
            
            // && -> and
            bool a, b;
            a = true;
            b = true;
            Console.WriteLine(a && b);
            
            a = false;
            b = true;
            Console.WriteLine(a && b);
            
            a = true;
            b = false;
            Console.WriteLine(a && b);

            a = false;
            b = false;
            Console.WriteLine(a && b);
            
            //|| -> or, ! -> not
            Console.WriteLine();
            
            a = true;
            b = true;
            Console.WriteLine(a || b);
            
            a = false;
            b = true;
            Console.WriteLine(a || b);
            
            a = true;
            b = false;
            Console.WriteLine(a || b);

            a = false;
            b = false;
            Console.WriteLine(a || b);
            
            // ! -> not
            Console.WriteLine();
            
            a = true;
            b = false;
            Console.WriteLine(!a);
            Console.WriteLine(!b);
        }
    }
}