namespace ex06;

public class IMC {
    private double Peso { get; }
    private double Altura { get; }
    
    public IMC(double peso, double altura) {
        Peso = peso;
        Altura = altura;
    }

    public void CalcularIMC() {
        
        double imc = Peso / (Altura * Altura);

        string classificacao = imc < 18.5 ? "Abaixo do peso" :
            imc >= 18.5 && imc < 24.9 ? "Peso normal" :
            imc >= 25 && imc < 29.9 ? "Sobrepeso" :
            "Obesidade";

        Console.WriteLine($"IMC: {imc:F2} - {classificacao}");
    }
}