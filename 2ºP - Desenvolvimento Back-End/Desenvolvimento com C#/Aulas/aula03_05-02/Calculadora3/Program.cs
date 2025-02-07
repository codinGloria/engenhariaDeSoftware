namespace Calculadora3 {
    internal class Program {
        static void Main(string[] args) {
            
            double op1, op2, result;
            
            Console.WriteLine("Entre com o operando: ");
            op1 = double.Parse(Console.ReadLine());
            Console.WriteLine("Entre com o operando: ");
            op2 = double.Parse(Console.ReadLine());

            result = op1 + op2;
            Console.WriteLine("Soma = " + result);
            result = op1 - op2;
            Console.WriteLine("Subtração = " + result);

        }
    }
}