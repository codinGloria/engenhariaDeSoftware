// using System.ComponentModel.Design;
// using ex09.models;
//
// namespace ex09;
//
// class Parte01 {
//     static void Main(string[] args) {
//         Produto[] estoque = new Produto[5];
//         int count = 0;
//         int opcao;
//
//         do {
//             Menu();
//             opcao = int.Parse(Console.ReadLine());
//
//             if (opcao == 1)
//             {
//                 if (count >= 5)
//                 {
//                     Console.WriteLine("Limite de produtos atingido!");
//                 }
//                 else
//                 {
//                     Produto p = new Produto();
//                     Console.Write("Nome: ");
//                     p.Nome = Console.ReadLine();
//                     Console.Write("Quantidade: ");
//                     p.Quantidade = int.Parse(Console.ReadLine());
//                     Console.Write("Preço: ");
//                     p.Preco = double.Parse(Console.ReadLine());
//                     estoque[count++] = p;
//                 }
//             }
//             else if (opcao == 2)
//             {
//                 for (int i = 0; i < count; i++)
//                 {
//                     Console.WriteLine($"Produto: {estoque[i].Nome} | Quantidade: {estoque[i].Quantidade} | Preço: R$ {estoque[i].Preco:F2}");
//                 }
//             }
//         } while (opcao != 3);
//     }
//
//     public static void Menu() {
//         Console.WriteLine();
//         Console.WriteLine("####### Menu #######");
//         Console.WriteLine("1) Inserir Produto");
//         Console.WriteLine("2) Listar Produtos");
//         Console.WriteLine("3) Sair");
//     }
// }