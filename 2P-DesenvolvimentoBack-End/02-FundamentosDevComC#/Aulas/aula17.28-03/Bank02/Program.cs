using Bank02.Models;

namespace Bank02;

class Program {
    static void Main(string[] args) {
        List<IAccount> accounts = [
            new Standard(2, "Luffy", 2000, "123.456.789-00"),
            new Business(3, "Mugiwaras", 3000, "12.345.678/0001-00"),
            new Premium(4, "Nami", 4000, "987.654.321-00", 500),
        ];
        
        foreach (var account in accounts) {
            Console.WriteLine(account.CalculateBalance());
        }
    }
}