namespace ex08;

class Program {
    static void Main(string[] args) {
        Console.Write("Digite a nota (0 a 10): ");
        double nota = double.Parse(Console.ReadLine());
        
        ClassificacaoNota classificacao = new ClassificacaoNota(nota);
        classificacao.ClassificarNota();
    }
}