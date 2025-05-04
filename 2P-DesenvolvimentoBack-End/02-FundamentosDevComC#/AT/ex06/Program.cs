using ex06.model;

namespace ex06;

class Program {
    static void Main(string[] args) {
        
        Aluno aluna = new Aluno
        {
            Nome = "Glória Braz",
            Matricula = "20240428",
            Curso = "Engenharia de Software",
            MediaNotas = 8.2
        };

        aluna.ExibirDados();
        Console.WriteLine($"Status: {aluna.VerificarAprovacao()}");
    }
}