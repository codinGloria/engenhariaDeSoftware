namespace ex06;

class Program {
    static void Main(string[] args) {
        Console.WriteLine("Cálculo de IMC");
        
        Console.WriteLine("Utilize ',' para casas decimais");
        Console.WriteLine("-------------------");
        
        Console.Write("Digite seu peso (kg): ");
        double peso = double.Parse(Console.ReadLine());

        Console.Write("Digite sua altura (m): ");
        double altura = double.Parse(Console.ReadLine());

        IMC imc = new IMC(peso, altura);
        imc.CalcularIMC();
    }
}