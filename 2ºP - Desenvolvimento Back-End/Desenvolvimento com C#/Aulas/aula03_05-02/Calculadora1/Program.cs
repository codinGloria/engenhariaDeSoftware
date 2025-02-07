namespace Calculadora1 {
    internal class Program {
        static void Main(string[] args){
            
            double op1, op2, result;

            op1 = 2;
            op2 = 10;

            result = op1 + op2;
            Console.WriteLine("Soma = " + result);
            
            result = op1 - op2;
            Console.WriteLine("Subtração = " + result);
            
            result = op1 * op2;
            Console.WriteLine("Multiplicação = " + result);
            
            result = op1 / op2;
            Console.WriteLine("Divisão = " + result);
            Console.WriteLine("Divisão truncada = " + Math.Truncate(result));
            Console.WriteLine("Divisão arredondada = " + Math.Round(result));
            
            result = op1 % op2;
            Console.WriteLine("Resto = " + result);
            
            result = op1 + op2;
            Console.WriteLine("Soma = " + result);

            result = Math.Pow(op1, op2);
            Console.WriteLine("Exponenciação = " + result);

        }
    }
}