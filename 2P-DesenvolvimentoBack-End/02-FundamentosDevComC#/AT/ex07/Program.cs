using ex07.models;

namespace ex07;

class Program {
    static void Main(string[] args) {
        
        ContaBancaria conta = new ContaBancaria { Titular = "Luan Henrique" };

        Console.WriteLine($"Titular: {conta.Titular}");

        conta.Depositar(500);
        conta.ExibirSaldo();

        conta.Sacar(700); // Deve retornar o erro de saldo insuficiente
        conta.ExibirSaldo();
        
        conta.Depositar(-40); // Deve retornar o erro de valor negativo
        
        
        conta.Sacar(200);
        conta.ExibirSaldo();
    }
}