namespace ex03;

class Program {
    static void Main(string[] args) {
        
        Console.Write("Digite o primeiro número: ");
        if (!double.TryParse(Console.ReadLine(), out double num1))
        {
            Console.WriteLine("Número inválido.");
            return;
        }

        Console.Write("Digite o segundo número: ");
        if (!double.TryParse(Console.ReadLine(), out double num2))
        {
            Console.WriteLine("Número inválido.");
            return;
        }

        Console.WriteLine("\nEscolha a operação: \n1) Soma \n2) Subtração \n3) Multiplicação \n4) Divisão");
        string opcao = Console.ReadLine();
        Console.WriteLine();

        switch (opcao) {
            case "1":
                Console.WriteLine($"Resultado: {num1 + num2}");
                break;
            case "2":
                Console.WriteLine($"Resultado: {num1 - num2}");
                break;
            case "3":
                Console.WriteLine($"Resultado: {num1 * num2}");
                break;
            case "4":
                if (num2 == 0)
                    Console.WriteLine("Erro: Divisão por zero.");
                else
                    Console.WriteLine($"Resultado: {num1 / num2}");
                break;
            default:
                Console.WriteLine("Operação inválida.");
                break;
        }
    }
}