namespace exs10_11_12.models;

public class Circulo {
    public double Raio { get; set; }

    public Circulo(double raio) {
        Raio = raio;
    }

    public double CalcularArea() {
        return Math.PI * (Raio * Raio);
    }
}