using ex12.models;

namespace ex12;

class Program {
    static string caminho = @"C:\Users\Glória\Downloads\AT\ex12\contatos.txt";

    static void Main()
    {
        int opcao;
        do
        {
            Console.WriteLine("\n1 - Adicionar novo contato\n2 - Listar contatos\n3 - Sair");
            opcao = int.Parse(Console.ReadLine());

            if (opcao == 1)
            {
                Console.Write("Nome: ");
                string nome = Console.ReadLine();
                Console.Write("Telefone: ");
                string telefone = Console.ReadLine();
                Console.Write("Email: ");
                string email = Console.ReadLine();

                using (StreamWriter sw = File.AppendText(caminho))
                {
                    sw.WriteLine($"{nome},{telefone},{email}");
                }

                Console.WriteLine("Contato cadastrado com sucesso!");
            }
            else if (opcao == 2)
            {
                if (!File.Exists(caminho))
                {
                    Console.WriteLine("Nenhum contato cadastrado.");
                    continue;
                }

                List<Contato> contatos = new List<Contato>();
                foreach (var linha in File.ReadAllLines(caminho))
                {
                    var dados = linha.Split(',');
                    contatos.Add(new Contato { Nome = dados[0], Telefone = dados[1], Email = dados[2] });
                }

                Console.WriteLine("Escolha o formato de exibição:");
                Console.WriteLine("1 - Markdown\n2 - Tabela\n3 - Texto Puro");
                int formato = int.Parse(Console.ReadLine());

                ContatoFormatter formatter = formato switch
                {
                    1 => new MarkdownFormatter(),
                    2 => new TabelaFormatter(),
                    _ => new RawTextFormatter()
                };

                formatter.ExibirContatos(contatos);
            }

        } while (opcao != 3);

        Console.WriteLine("Encerrando programa...");
    }
}