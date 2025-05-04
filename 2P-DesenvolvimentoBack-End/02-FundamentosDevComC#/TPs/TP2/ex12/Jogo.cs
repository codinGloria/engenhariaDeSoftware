namespace ex12;

public class Jogo {
    public int NumeroSecreto { get; set; }
    public int Tentativas { get; set; }

    public Jogo() {
        Random random = new Random();
        NumeroSecreto = random.Next(1, 101); 
        Tentativas = 0;
    }

    public void IniciarJogo() {
        int palpite;
        bool acertou = false;

        while (!acertou) {
            Console.Write("Tente adivinhar o número entre 1 e 100: ");
            palpite = int.Parse(Console.ReadLine());
            Tentativas++;

            if (palpite < NumeroSecreto){
                Console.WriteLine("O número é maior.");
            } else if (palpite > NumeroSecreto) {
                Console.WriteLine("O número é menor.");
            } else {
                acertou = true;
                Console.WriteLine($"\nParabéns! Você acertou o número {NumeroSecreto} em {Tentativas} tentativas.");
            }
        }
    }
}