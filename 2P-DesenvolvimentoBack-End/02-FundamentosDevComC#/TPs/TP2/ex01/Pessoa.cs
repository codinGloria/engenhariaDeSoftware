namespace ex01;

public class Pessoa {
    public DateTime DataNascimento { get; set; }

    public Pessoa(DateTime dataNascimento) {
        DataNascimento = dataNascimento;
    }

    public void CalcularIdade() {
        DateTime dataAtual = DateTime.Today;

        int idadeAnos = dataAtual.Year - DataNascimento.Year;
        if (dataAtual.Month < DataNascimento.Month || (dataAtual.Month == DataNascimento.Month && dataAtual.Day < DataNascimento.Day))
        {
            idadeAnos--;
        }

        int idadeMeses = dataAtual.Month - DataNascimento.Month;
        if (dataAtual.Day < DataNascimento.Day)
        {
            idadeMeses--;
        }

        if (idadeMeses < 0) {
            idadeMeses += 12;
        }

        DateTime aniversarioAtual = new DateTime(dataAtual.Year, DataNascimento.Month, DataNascimento.Day);
        if (aniversarioAtual > dataAtual) {
            aniversarioAtual = aniversarioAtual.AddYears(-1);
        }
        int idadeDias = (dataAtual - aniversarioAtual).Days;

        string anosTexto = idadeAnos == 1 ? "ano" : "anos";
        string mesesTexto = idadeMeses == 1 ? "mês" : "meses";
        string diasTexto = idadeDias == 1 ? "dia" : "dias";

        string idadeFormatada = "";
        
        if (idadeAnos > 0){
            idadeFormatada += $"{idadeAnos} {mesesTexto}";
        }
        
        if (idadeMeses > 0){
            idadeFormatada += $", {idadeMeses} {mesesTexto}";
        }

        if (idadeDias > 0 || (idadeAnos == 0 && idadeMeses == 0)) {
            if (idadeMeses > 0 || idadeAnos > 0){
                idadeFormatada += $" e {idadeDias} {diasTexto}";
            } else {
                idadeFormatada += $"{idadeDias} {diasTexto}";
            }
        }

        Console.WriteLine($"Sua idade é: {idadeFormatada}.");
    }

}