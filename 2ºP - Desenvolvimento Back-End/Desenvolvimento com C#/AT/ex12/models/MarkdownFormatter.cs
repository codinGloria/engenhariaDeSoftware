namespace ex12.models;

public class MarkdownFormatter : ContatoFormatter {
    public override void ExibirContatos(List<Contato> contatos) {
        Console.WriteLine("## Lista de Contatos\n");
        foreach (var c in contatos) {
            Console.WriteLine($"- **Nome:** {c.Nome}\n- 📞 Telefone: {c.Telefone}\n- 📧 Email: {c.Email}\n");
        }
    }
}