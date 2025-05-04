namespace ex09;

class Program {
    static void Main(string[] args) {
        Console.Write("Digite o salário bruto: ");
        double salarioBruto = double.Parse(Console.ReadLine());
        
        CalculadoraSalario calculadora = new CalculadoraSalario(salarioBruto);
        calculadora.ExibirSalarioLiquido();
    }
}