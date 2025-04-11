namespace ex08.models;

public class Gerente : Funcionario {
    public override double CalcularSalario() {
        return SalarioBase * 1.2;
    }
}