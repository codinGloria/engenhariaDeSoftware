namespace ex08;

public class ClassificacaoNota {
    public double Nota { get; set; }

    public ClassificacaoNota(double nota) {
        Nota = nota;
    }

    public void ClassificarNota() {
        string classificacao;

        if (Nota >= 0 && Nota < 4) {
            classificacao = "Insuficiente";
        } else if (Nota >= 4 && Nota < 7) {
            classificacao = "Regular";
        } else if (Nota >= 7 && Nota < 9) {
            classificacao = "Bom";
        } else if (Nota > 9 && Nota <= 10) {
            classificacao = "Excelente";
        } else {
            classificacao = "Nota inválida";
        }

        Console.WriteLine($"A nota {Nota} é classificada como: {classificacao}");
    }
}