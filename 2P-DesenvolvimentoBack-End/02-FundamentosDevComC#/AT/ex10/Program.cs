namespace ex10;

class Program {
    static void Main(string[] args) {
        Random rnd = new Random();
        int numeroSecreto = rnd.Next(1, 51);
        int tentativas = 5;

        while (tentativas > 0)
        {
            Console.Write($"Tentativa {6 - tentativas}/5 - Adivinhe o número (1 a 50): ");
            try
            {
                int palpite = int.Parse(Console.ReadLine());

                if (palpite < 1 || palpite > 50)
                {
                    Console.WriteLine("Número fora do intervalo!");
                    continue;
                }

                if (palpite == numeroSecreto)
                {
                    Console.WriteLine("Parabéns! Você acertou!");
                    return;
                }
                else
                {
                    Console.WriteLine("Errou! Tente novamente.");
                }

                tentativas--;
            }
            catch
            {
                Console.WriteLine("Entrada inválida!");
            }
        }

        Console.WriteLine($"Suas tentativas acabaram! O número era {numeroSecreto}.");
    }
}