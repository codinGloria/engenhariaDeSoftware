namespace ex10;

class Program {
    static void Main(string[] args) {
        Console.Write("Digite um número para a contagem regressiva: ");
        int numero = int.Parse(Console.ReadLine());
        
        ContagemRegressiva contagem = new ContagemRegressiva(numero);
        contagem.ExibirContagemRegressiva();
    }
}