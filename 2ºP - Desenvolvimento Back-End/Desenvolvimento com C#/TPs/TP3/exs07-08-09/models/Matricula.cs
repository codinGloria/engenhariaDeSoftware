namespace ex07_08_09.models;

public class Matricula {
    string NomeDoAluno { get; set; }
    string Curso { get; set; }
    int NumeroMatricula { get; set; }
    string Situacao { get; set; }
    string DataInicial { get; set; }
    
    public Matricula(string nomeDoAluno, string curso, int numeroMatricula, string situacao, string dataInicial) {
        NomeDoAluno = nomeDoAluno;
        Curso = curso;
        NumeroMatricula = numeroMatricula;
        Situacao = situacao;
        DataInicial = dataInicial;
    }

    public void Trancar() {
        if (Situacao == "Ativa") {
            Situacao = "Trancada";
            Console.WriteLine("Matrícula trancada com sucesso!");
        } else {
            Console.WriteLine("A matrícula já está trancada ou concluída.");
        }
    }
    
    public void Reativar() {
        if (Situacao == "Trancada") {
            Situacao = "Ativa";
            Console.WriteLine("Matrícula reativada com sucesso!");
        } else {
            Console.WriteLine("A matrícula precisa estar trancada para ser reativada.");
        }
    }
    
    public void ExibirInformacoes() {
        Console.WriteLine("---- Matrícula ----");
        Console.WriteLine("Nome do aluno: " + NomeDoAluno);
        Console.WriteLine("Curso: " + Curso);
        Console.WriteLine("Número da matrícula: " + NumeroMatricula);
        Console.WriteLine("Situação: " + Situacao);
        Console.WriteLine("Data inicial: " + DataInicial);
    }
}