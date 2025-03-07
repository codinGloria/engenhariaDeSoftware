namespace ex07;

class Program {
    static void Main(string[] args) {
        Console.Write("Digite um número inteiro: ");
        int numero = int.Parse(Console.ReadLine());
        
        VerificadorParImpar verificador = new VerificadorParImpar(numero);
        verificador.VerificarParidade();
    }
}