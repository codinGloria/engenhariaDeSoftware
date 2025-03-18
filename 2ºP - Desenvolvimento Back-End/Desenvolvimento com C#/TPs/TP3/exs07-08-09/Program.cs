using ex07_08_09.models;

namespace ex07_08_09;

class Program {
    static void Main(string[] args) {
        Matricula matricula = new Matricula("Zoro", "Swordsmanship", 123456, "Ativa", "01/01/2021");
        
        matricula.ExibirInformacoes();

        matricula.Trancar();
        matricula.Trancar();
        matricula.ExibirInformacoes();
        
        matricula.Reativar();
        matricula.Reativar();
        matricula.ExibirInformacoes();
    }
}