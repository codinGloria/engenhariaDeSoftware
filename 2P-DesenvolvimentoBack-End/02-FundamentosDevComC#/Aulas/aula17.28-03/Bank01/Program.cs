using Bank01.Models;

namespace Bank01;

class Program {
    static void Main(string[] args) {
        List<Account> accounts = [
            new Standard(2, "Luffy", 2000, "123.456.789-00"),
            new Business(3, "Mugiwaras", 3000, "12.345.678/0001-00"),
            new Premium(4, "Nami", 4000, "987.654.321-00", 500),
        ];
        
        foreach (var account in accounts) {
            Console.WriteLine(account.CalculateBalance());
        }
    }
}