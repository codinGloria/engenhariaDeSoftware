namespace ex02;

class Program {
    static void Main(string[] args) {
        
        Console.Write("Data de Nascimento (dd/mm/aaaa): ");
        DateTime dataNascimento = DateTime.ParseExact(Console.ReadLine(), "dd/MM/yyyy", null);

        Pessoa pessoa = new Pessoa(dataNascimento);
        
        pessoa.ExibirDiasRestantes();
    }
}