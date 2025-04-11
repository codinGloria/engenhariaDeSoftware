namespace ex07.models;

public class ContaBancaria {
    
    public string Titular { get; set; }
    private decimal Saldo;

    public void Depositar(decimal valor) {
        if (valor <= 0) {
            Console.WriteLine($"Tentativa de depósito: R$ {valor:F2}");
            Console.WriteLine("O valor do depósito deve ser positivo!\n");
            return;
        }

        Saldo += valor;
        Console.WriteLine($"Depósito de R$ {valor:F2} realizado com sucesso!");
    }

    public void Sacar(decimal valor) {
        if (valor > Saldo) {
            Console.WriteLine($"Tentativa de saque: R$ {valor:F2}");
            Console.WriteLine("Saldo insuficiente para realizar o saque!\n");
            return;
        }

        Saldo -= valor;
        Console.WriteLine($"Saque de R$ {valor:F2} realizado com sucesso!");
    }

    public void ExibirSaldo() {
        Console.WriteLine($"Saldo atual: R$ {Saldo:F2}\n");
    }
}