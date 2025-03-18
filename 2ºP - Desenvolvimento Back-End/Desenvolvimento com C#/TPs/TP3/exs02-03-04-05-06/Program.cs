using exs02_03_04_05_06.Models;

namespace exs02_03_04_05_06;

class Program {
    static void Main(string[] args) {
        Console.WriteLine("Declarando com o construtor vazio:");
        Ingresso ingresso = new Ingresso();
        ingresso.NomeDoShow = "Slipknot - We Are Not Your Kind Tour";
        ingresso.Preco = 200;
        ingresso.QuantidadeDisponivel = 1000;
        
        ingresso.ExibirInformacoes();

        Console.WriteLine("\nUtilizando os métodos:");
        ingresso.AlterarPreco(150);
        ingresso.AlterarQuantidade(500);
        
        ingresso.ExibirInformacoes();

        Console.WriteLine("\nAlterando utilizando o setter:");
        ingresso.NomeDoShow = "Metallica - WorldWired Tour";
        ingresso.Preco = 450.00;

        ingresso.ExibirInformacoes();

        Console.WriteLine("\nDeclarando com o construtor completo:");
        Ingresso ingresso2 = new Ingresso("Iron Maiden - Legacy of the Beast Tour", 300, 800);
        ingresso2.ExibirInformacoes();
    }
}