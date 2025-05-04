namespace ex11;

class Program {
    static void Main(string[] args) {
        string caminho = @"C:\Users\Glória\Downloads\AT\ex11\contatos.txt";
        int opcao;

        do
        {
            Console.WriteLine("\n=== Gerenciador de Contatos ===");
            Console.WriteLine("1 - Adicionar novo contato");
            Console.WriteLine("2 - Listar contatos cadastrados");
            Console.WriteLine("3 - Sair");
            Console.Write("Escolha uma opção: ");
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
                if (!File.Exists(caminho) || File.ReadAllLines(caminho).Length == 0)
                {
                    Console.WriteLine("Nenhum contato cadastrado.");
                }
                else
                {
                    string[] contatos = File.ReadAllLines(caminho);
                    Console.WriteLine("\nContatos cadastrados:\n");
                    foreach (string contato in contatos)
                    {
                        string[] dados = contato.Split(',');
                        Console.WriteLine($"Nome: {dados[0]} | Telefone: {dados[1]} | Email: {dados[2]}");
                    }
                }
            }
        } while (opcao != 3);

        Console.WriteLine("Encerrando programa...");
    }
}