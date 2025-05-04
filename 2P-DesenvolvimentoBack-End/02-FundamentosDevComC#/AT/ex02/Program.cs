namespace ex02;

class Program {
    static void Main(string[] args) {
        
        Console.Write("Digite seu nome completo: ");
        string nome = Console.ReadLine();
        char[] nomeCodificado = new char[nome.Length];
        
        for (int i = 0; i < nome.Length; i++) {
            char letra = nome[i];

            if (char.IsLetter(letra)) {
                char letraBase = char.IsUpper(letra) ? 'A' : 'a';
                nomeCodificado[i] = (char)(((letra - letraBase + 2) % 26) + letraBase);
            } else {
                nomeCodificado[i] = letra;
            }
        }

        Console.WriteLine("Nome codificado: " + new string(nomeCodificado));
    }
}