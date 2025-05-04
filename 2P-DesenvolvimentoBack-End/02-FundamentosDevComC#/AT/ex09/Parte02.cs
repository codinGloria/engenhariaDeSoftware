using ex09.models;

namespace ex09 {
    class Parte02 {
        static string caminhoArquivo = @"C:\Users\Glória\Downloads\AT\ex09\estoque.txt";

        static void Main(string[] args) {
            int opcao;

            do {
                Menu();
                opcao = int.Parse(Console.ReadLine());

                if (opcao == 1) {
                    InserirProduto();
                }
                else if (opcao == 2) {
                    ListarProdutos();
                }

            } while (opcao != 3);
        }

        public static void Menu() {
            Console.WriteLine();
            Console.WriteLine("####### Menu #######");
            Console.WriteLine("1) Inserir Produto");
            Console.WriteLine("2) Listar Produtos");
            Console.WriteLine("3) Sair");
        }

        static void InserirProduto() {
            try {
                int quantidadeAtual = 0;
                if (File.Exists(caminhoArquivo)) {
                    quantidadeAtual = File.ReadAllLines(caminhoArquivo).Length;
                }

                if (quantidadeAtual >= 5) {
                    Console.WriteLine("Limite de produtos atingido!");
                    return;
                }

                Produto p = new Produto();
                Console.Write("Nome: ");
                p.Nome = Console.ReadLine();
                Console.Write("Quantidade: ");
                p.Quantidade = int.Parse(Console.ReadLine());
                Console.Write("Preço: ");
                p.Preco = double.Parse(Console.ReadLine());

                using (StreamWriter writer = File.AppendText(caminhoArquivo)) {
                    writer.WriteLine($"{p.Nome};{p.Quantidade};{p.Preco:F2}");
                }

                Console.WriteLine("Produto cadastrado com sucesso!");
            }
            catch (Exception ex) {
                Console.WriteLine("Erro ao inserir produto: " + ex.Message);
            }
        }

        static void ListarProdutos() {
            try {
                if (!File.Exists(caminhoArquivo) || new FileInfo(caminhoArquivo).Length == 0) {
                    Console.WriteLine("Nenhum produto cadastrado.");
                    return;
                }

                string[] linhas = File.ReadAllLines(caminhoArquivo);

                foreach (string linha in linhas) {
                    string[] partes = linha.Split(';');

                    if (partes.Length != 3) {
                        Console.WriteLine("Linha com formato inválido: " + linha);
                        continue;
                    }

                    string nome = partes[0];
                    int quantidade = int.Parse(partes[1]);
                    double preco = double.Parse(partes[2]);

                    Console.WriteLine($"Produto: {nome} | Quantidade: {quantidade} | Preço: R$ {preco:F2}");
                }
            }
            catch (Exception ex) {
                Console.WriteLine("Erro ao listar produtos: " + ex.Message);
            }
        }
    }
}