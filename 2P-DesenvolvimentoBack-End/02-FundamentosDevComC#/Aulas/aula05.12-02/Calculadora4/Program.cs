namespace aula05._12_02;

class Program {
    static void Main(string[] args) {

        int opcao = EntrarOperador();
        double op1 = EntrarOperando();
        double op2 = EntrarOperando();

        Calcular(opcao, op1, op2);
    }

    public static double EntrarOperando() {
        Console.WriteLine("Entre com o operando: ");
        double op = double.Parse(Console.ReadLine());
        return op;
    }

    public static int EntrarOperador() {
        Console.WriteLine("********** Calculadora **********");
        Console.WriteLine("[1] Soma");
        Console.WriteLine("[2] Subtração");
        Console.WriteLine("[3] Multiplicação");
        Console.WriteLine("[4] Divisão");
        Console.WriteLine("Qual operação deseja fazer? ");

        int opcao = int.Parse(Console.ReadLine());
        return opcao;
    }

    public static void Calcular(int opcao, double op1, double op2) {

        switch (opcao) {
            case 1:
                Somar(op1, op2);
                break;
            case 2:
                Subtrair(op1, op2);
                break;
            case 3:
                Multiplicar(op1, op2);
                break;
            case 4:
                Dividir(op1, op2);
                break;
            default:
                Console.WriteLine("Opção inválida");
                break;
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