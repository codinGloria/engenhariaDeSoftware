namespace Calculadora05;

class Program {
    static void Main(string[] args) {
        const int FIM = 0;
        int opcao = EntrarOpcao();
        
        while (opcao != FIM) {
            double op1 = EntrarOperando();
            double op2 = EntrarOperando();

            Calcular(opcao, op1, op2);

            opcao = EntrarOpcao();
        }
    }

    public static double EntrarOperando() {
        Console.WriteLine("Entre com o número: ");
        double op = double.Parse(Console.ReadLine());
        return op;
    }

    public static void Menu() {
        Console.WriteLine("\n********** Calculadora **********");
        Console.WriteLine("[1] Soma");
        Console.WriteLine("[2] Subtração");
        Console.WriteLine("[3] Multiplicação");
        Console.WriteLine("[4] Divisão");
        Console.WriteLine("[0] Sair");
    }
    
    public static int EntrarOpcao() {
        int opcao;
        do {
            Menu();
            Console.WriteLine("Qual operação deseja fazer? ");
            opcao = int.Parse(Console.ReadLine());
        } while ((opcao < 0) || (opcao > 4));
        return opcao;
    }

    public static void Calcular(int opcao, double op1, double op2) {

        switch (opcao) {
            case 1: Somar(op1, op2); break;
            case 2: Subtrair(op1, op2); break;
            case 3: Multiplicar(op1, op2); break;
            case 4: Dividir(op1, op2); break;
            default: Console.WriteLine("Opção inválida"); break;
        }
    }

    public static void Somar(double a, double b) {
        double result = a + b;
        Console.WriteLine("Soma = " + result);
    }

    public static void Subtrair(double a, double b) {
        double result = a - b;
        Console.WriteLine("Subtração = " + result);
    }

    public static void Multiplicar(double a, double b) {
        double result = a * b;
        Console.WriteLine("Multiplicação = " + result);
    }

    public static void Dividir(double a, double b) {
        if (b != 0) {
            double result = a / b;
            Console.WriteLine("Divisão = " + result);
        }
        else {
            Console.WriteLine("Erro: Divisão por zero não é permitida");
        }
    }
}