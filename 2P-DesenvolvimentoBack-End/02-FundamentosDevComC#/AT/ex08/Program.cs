using ex08.models;

namespace ex08;

class Program {
    static void Main(string[] args) {
        Funcionario funcionario = new Funcionario {
            Nome = "Glória",
            Cargo = "Engenheira de Software",
            SalarioBase = 3200
        };

        Gerente gerente = new Gerente {
            Nome = "Luan",
            Cargo = "Gerente de Projetos",
            SalarioBase = 12000
        };

        Console.WriteLine($"{funcionario.Nome} - {funcionario.Cargo} - Salário: R$ {funcionario.CalcularSalario():F2}");
        Console.WriteLine($"{gerente.Nome} - {gerente.Cargo} - Salário: R$ {gerente.CalcularSalario():F2}");
    }
}