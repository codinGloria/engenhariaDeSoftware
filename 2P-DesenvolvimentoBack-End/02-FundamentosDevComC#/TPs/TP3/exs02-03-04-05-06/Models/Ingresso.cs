namespace exs02_03_04_05_06.Models;

public class Ingresso {
    public string NomeDoShow { get; set; }
    public double Preco { get; set; }
    public int QuantidadeDisponivel { get; set; }
    
    public Ingresso() {}
    
    public Ingresso(string nomeDoShow, double preco, int quantidadeDisponivel) {
        NomeDoShow = nomeDoShow;
        Preco = preco;
        QuantidadeDisponivel = quantidadeDisponivel;
    }
    
    public double AlterarPreco(double novoPreco) {
        Preco = novoPreco;
        return Preco;
    }
    
    public int AlterarQuantidade(int novaQuantidade) {
        QuantidadeDisponivel = novaQuantidade;
        return QuantidadeDisponivel;
    }
    
    public void ExibirInformacoes() {
        Console.WriteLine("---- Ingresso ----");
        Console.WriteLine("Nome do show: " + NomeDoShow);
        Console.WriteLine("Preço: " + Preco);
        Console.WriteLine("Quantidade disponível: " + QuantidadeDisponivel);
    }
}