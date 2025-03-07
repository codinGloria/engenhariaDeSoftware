namespace ex02;

public class Pessoa {
    public DateTime DataNascimento { get; set; }

    public Pessoa(DateTime dataNascimento) {
        DataNascimento = dataNascimento;
    }

    public int DiasParaProximoAniversario() {
        DateTime dataAtual = DateTime.Now;
        DateTime aniversarioProximo = new DateTime(dataAtual.Year, DataNascimento.Month, DataNascimento.Day);
        
        if (dataAtual > aniversarioProximo) {
            aniversarioProximo = aniversarioProximo.AddYears(1);
        }

        int diasRestantes = (aniversarioProximo - dataAtual).Days;
        return diasRestantes;
    }

    public void ExibirDiasRestantes(){
        int diasRestantes = DiasParaProximoAniversario();
        Console.WriteLine($"Faltam {diasRestantes} dias para o seu próximo aniversário.");
    }
}