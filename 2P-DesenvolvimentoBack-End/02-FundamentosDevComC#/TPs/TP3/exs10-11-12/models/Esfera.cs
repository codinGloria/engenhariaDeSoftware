namespace exs10_11_12.models;

public class Esfera {
    public double Raio { get; set; }

    public Esfera(double raio) {
        Raio = raio;
    }

    public double CalcularVolume() {
        return (4.0 / 3.0) * Math.PI * (Raio * Raio * Raio);
    }
} 