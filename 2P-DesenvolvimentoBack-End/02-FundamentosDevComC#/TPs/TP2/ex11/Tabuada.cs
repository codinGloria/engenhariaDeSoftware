namespace ex11;

public class Tabuada {
    public int Numero { get; set; }

    public Tabuada(int numero) {
        Numero = numero;
    }

    public void ExibirTabuada() {
        for (int i = 1; i <= 10; i++) {
            Console.WriteLine($"{Numero} x {i} = {Numero * i}");
        }
    }
}