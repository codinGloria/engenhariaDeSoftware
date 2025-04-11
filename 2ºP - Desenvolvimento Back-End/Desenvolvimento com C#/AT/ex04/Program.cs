namespace ex04;

class Program {
    static void Main(string[] args) {
        Console.Write("Digite sua data de nascimento (dd/MM/yyyy): ");
        if (!DateTime.TryParse(Console.ReadLine(), out DateTime nascimento))
        {
            Console.WriteLine("Data inválida.");
            return;
        }

        DateTime hoje = DateTime.Today;
        DateTime proximoAniversario = new DateTime(hoje.Year, nascimento.Month, nascimento.Day);

        if (proximoAniversario < hoje)
            proximoAniversario = proximoAniversario.AddYears(1);

        TimeSpan diferenca = proximoAniversario - hoje;

        Console.WriteLine($"Faltam {diferenca.Days} dias para seu próximo aniversário!");

        if (diferenca.Days < 7)
        {
            Console.WriteLine("\nFalta pouco! Seu aniversário está chegando!");
        }
    }
}