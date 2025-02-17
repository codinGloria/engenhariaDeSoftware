namespace Do_While;

class DoWhile {
    static void Main(string[] args) {
        // Executa o bloco de código pelo menos uma vez
        
        const int FIM = 0; // FLAG
        int num, soma = 0;
        
        do {
            Console.Write("Entre com um número ou zero para terminar: ");
            num = int.Parse(Console.ReadLine());
            soma += num;
        } while (num != FIM);
        
        Console.WriteLine("A soma dos números é: " + soma);
    }
}