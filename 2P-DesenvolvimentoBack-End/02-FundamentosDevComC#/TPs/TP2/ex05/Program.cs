namespace ex05;

class Program {
    static void Main(string[] args) {
        Console.Write("Digite a temperatura em Celsius: ");
        double celsius = double.Parse(Console.ReadLine());
        
        ConversorTemperatura conversor = new ConversorTemperatura(celsius);
        
        conversor.ExibirConversao();
    }
}