namespace SegundaAula;

class Program {
    static void Main(string[] args) {
        // O C# é uma linguagem fortemente tipada
        // O que significa que você precisa declarar o tipo de uma variável, e que NÃO pode ser alterado depois
        
        // Declaração de variáveis
        int quantidade, idade = 22;
        double preco = 2.40;
        string nome = "Glória";
        char letra = 'a';
        bool achou = false;

        quantidade = 28;
        
        Console.WriteLine("Quantidade = " + quantidade);
        Console.WriteLine("Idade = " + idade);
        Console.WriteLine("Preçõ = " + preco);
        Console.WriteLine("Nome = " + nome);
        Console.WriteLine(letra);
        Console.WriteLine("Achou? = " + achou);

    }
}