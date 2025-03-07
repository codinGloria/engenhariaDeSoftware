namespace ex05;

public class ConversorTemperatura {
    public double Celsius { get; set; }

    public ConversorTemperatura(double celsius) {
        Celsius = celsius;
    }

    public void ExibirConversao() {
        double fahrenheit = Celsius * 9 / 5 + 32;
        double kelvin = Celsius + 273.15;
        Console.WriteLine("------------------");
        Console.WriteLine($"Temperatura em Fahrenheit: {fahrenheit:F2}");
        Console.WriteLine($"Temperatura em Kelvin: {kelvin:F2}");
    }
}