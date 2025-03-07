namespace ex09;

public class CalculadoraSalario {
    public double SalarioBruto { get; set; }

    public CalculadoraSalario(double salarioBruto) {
        SalarioBruto = salarioBruto;
    }

    public double CalcularDesconto() {
        double desconto;
        if (SalarioBruto <= 1500)
            desconto = 0.05;
        else if (SalarioBruto <= 4000)
            desconto = 0.1;
        else
            desconto = 0.15;

        return SalarioBruto * desconto;
    }

    public void ExibirSalarioLiquido() {
        double desconto = CalcularDesconto();
        double salarioLiquido = SalarioBruto - desconto;
        Console.WriteLine("------------------------");
        Console.WriteLine("Salário do funcionário:");
        Console.WriteLine($"Salário Bruto: R${SalarioBruto:F2}");
        Console.WriteLine($"Desconto: R${desconto:F2}");
        Console.WriteLine($"Salário Líquido: R${salarioLiquido:F2}");
    }
}