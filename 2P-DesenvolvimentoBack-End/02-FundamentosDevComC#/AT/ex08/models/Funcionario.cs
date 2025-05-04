namespace ex08.models;

public class Funcionario {
    public string Nome { get; set; }
    public string Cargo { get; set; }
    public double SalarioBase { get; set; }

    public virtual double CalcularSalario() {
        return SalarioBase;
    }
}