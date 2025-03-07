namespace ex04;

public class Cadastro {
    
    public string Nome { get; set; }
    public int Idade { get; set; }
    public string Telefone { get; set; }
    public string Email { get; set; }
    
    public void ExibirCadastro() {
        Console.WriteLine("--------------------");
        Console.WriteLine("Dados Cadastrados:");
        Console.WriteLine($"Nome: {Nome}");
        Console.WriteLine($"Idade: {Idade} anos");
        Console.WriteLine($"Telefone: {Telefone}");
        Console.WriteLine($"Email: {Email}");
    }
}