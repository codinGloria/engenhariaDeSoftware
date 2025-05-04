using exs10_11_12.models;

namespace exs10_11_12;

class Program {
    static void Main(string[] args) {
        Circulo circulo = new Circulo(10);
        double area = circulo.CalcularArea();
        Console.WriteLine($"Área do círculo:  {area:F2}");
        
        Esfera esfera = new Esfera(5);
        double volume = esfera.CalcularVolume();
        Console.WriteLine($"Volume da esfera: {volume:F2}");
    }
}