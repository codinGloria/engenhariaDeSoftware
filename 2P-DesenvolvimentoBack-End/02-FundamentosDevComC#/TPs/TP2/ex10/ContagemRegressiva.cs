namespace ex10;

public class ContagemRegressiva {
    public int Numero { get; set; }

    public ContagemRegressiva(int numero) {
        Numero = numero;
    }

    public void ExibirContagemRegressiva() {
        for (int i = Numero; i >= 0; i--) {
            Console.Write(i);
            if (i > 0) {
                Console.Write(", ");
            }
        }
        Console.WriteLine();
    }
}