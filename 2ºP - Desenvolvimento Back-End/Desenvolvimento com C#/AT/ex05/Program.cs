using System.Globalization;

namespace ex05;

class Program {
    static void Main(string[] args) {
        DateTime dataFormatura = new DateTime(2028, 06, 30);

        Console.Write("Digite a data atual (dd/MM/yyyy): ");
        string input = Console.ReadLine();

        if (DateTime.TryParseExact(input, "dd/MM/yyyy", CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime dataAtual))
        {
            if (dataAtual > DateTime.Now)
            {
                Console.WriteLine("Erro: A data informada não pode ser no futuro!");
                return;
            }

            if (dataAtual > dataFormatura)
            {
                Console.WriteLine("Parabéns! Você já deveria estar formada!");
                return;
            }

            TimeSpan diferenca = dataFormatura - dataAtual;
            DateTime dataTemp = new DateTime(1, 1, 1).Add(diferenca);

            int anos = dataFormatura.Year - dataAtual.Year;
            int meses = dataFormatura.Month - dataAtual.Month;
            int dias = dataFormatura.Day - dataAtual.Day;

            if (dias < 0)
            {
                meses--;
                dias += DateTime.DaysInMonth(dataAtual.Year, dataAtual.Month);
            }

            if (meses < 0)
            {
                anos--;
                meses += 12;
            }

            Console.WriteLine($"Faltam {anos} anos, {meses} meses e {dias} dias para sua formatura!");

            if (anos == 0 && meses < 6)
            {
                Console.WriteLine("A reta final chegou! Prepare-se para a formatura!");
            }
        }
        else
        {
            Console.WriteLine("Data inválida! Use o formato dd/MM/yyyy.");
        }
    }
}