namespace ex12.models;

public class TabelaFormatter : ContatoFormatter {
    public override void ExibirContatos(List<Contato> contatos)
    {
        Console.WriteLine("---------------------------------------------");
        Console.WriteLine("| Nome           | Telefone       | Email   |");
        Console.WriteLine("---------------------------------------------");
        foreach (var c in contatos)
        {
            Console.WriteLine($"| {c.Nome,-14} | {c.Telefone,-14} | {c.Email,-20} |");
        }
        Console.WriteLine("---------------------------------------------");
    }
}