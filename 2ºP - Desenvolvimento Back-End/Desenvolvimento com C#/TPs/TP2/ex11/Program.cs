namespace ex11;

class Program {
    static void Main(string[] args) {
        Console.Write("Digite um número para ver a tabuada: ");
        int numero = int.Parse(Console.ReadLine());
        
        Tabuada tabuada = new Tabuada(numero);
        tabuada.ExibirTabuada();
    }
}