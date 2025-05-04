namespace ex03;

class Program {
    static void Main(string[] args) {
        
        Console.Write("Digite a primeira data (dd/mm/aaaa): ");
        DateTime data1 = DateTime.ParseExact(Console.ReadLine(), "dd/MM/yyyy", null);
        
        Console.Write("Digite a segunda data (dd/mm/aaaa): ");
        DateTime data2 = DateTime.ParseExact(Console.ReadLine(), "dd/MM/yyyy", null);
        
        DataDiferenca diferenca = new DataDiferenca(data1, data2);
        diferenca.CalcularDiferenca();
    }
    
}