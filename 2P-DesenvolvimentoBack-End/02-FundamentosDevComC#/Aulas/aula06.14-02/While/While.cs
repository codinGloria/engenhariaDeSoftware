namespace aula06._14_02;

class While {
    static void Main(string[] args) {
         /*
          * Sobre os comandos de repetição:
          * 1. for: é utilizado quando sabemos o número de repetições que deve executar.
          * 2. while: é utilizado quando não sabemos o número de repetições que deve executar.
          * 3. do-while: é utilizado quando queremos que o bloco de código seja executado pelo menos uma vez.
          * 4. foreach: é utilizado para percorrer coleções de dados.
          */
        
        const int FIM = 0; // FLAG
        int num, soma = 0;
        
        Console.Write("Entre com um número ou zero para terminar: ");
        num = int.Parse(Console.ReadLine());
        
        while (num != FIM) {
            soma += num;
            Console.Write("Entre com um número ou zero para terminar: ");
            num = int.Parse(Console.ReadLine());
        }
        Console.WriteLine("A soma dos números é: " + soma);

    }
}