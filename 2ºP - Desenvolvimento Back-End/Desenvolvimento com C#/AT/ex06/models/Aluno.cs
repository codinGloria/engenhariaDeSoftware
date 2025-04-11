namespace ex06.model;

public class Aluno {
    public string Nome { get; set; }
    public string Matricula { get; set; }
    public string Curso { get; set; }
    public double MediaNotas { get; set; }

    public void ExibirDados()
    {
        Console.WriteLine($"Nome: {Nome}\nMatrícula: {Matricula}\nCurso: {Curso}\nMédia: {MediaNotas}");
    }

    public string VerificarAprovacao()
    {
        return MediaNotas >= 7 ? "Aprovado" : "Reprovado";
    }
}