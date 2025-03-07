namespace ex04;

class Program {
    static void Main(string[] args) {
        
        Cadastro cadastro = new Cadastro();

        Console.Write("Digite seu nome: ");
        cadastro.Nome = Console.ReadLine();
        
        Console.Write("Digite sua idade: ");
        cadastro.Idade = int.Parse(Console.ReadLine());
        
        Console.Write("Digite seu telefone: ");
        cadastro.Telefone = Console.ReadLine();
        
        Console.Write("Digite seu email: ");
        cadastro.Email = Console.ReadLine();

        cadastro.ExibirCadastro();
    }
}