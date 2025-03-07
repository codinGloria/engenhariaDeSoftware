namespace ex07;

public class VerificadorParImpar {
    public int Numero { get; set; }

    public VerificadorParImpar(int numero) {
        Numero = numero;
    }

    public void VerificarParidade() {
        if (Numero % 2 == 0) {
            Console.WriteLine($"O número {Numero} é par.");
        } else {
            Console.WriteLine($"O número {Numero} é ímpar.");
        }
    }
}