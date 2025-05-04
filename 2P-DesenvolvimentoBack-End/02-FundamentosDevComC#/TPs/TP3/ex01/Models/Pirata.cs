namespace ex01;

class Pirata {
    public String Nome { get; set; }
    public double Recompensa { get; set; }
    
    public Pirata() { }

    public Pirata(string nome, double recompensa){
        Nome = nome;
        Recompensa = recompensa;
    }
    
    public override string ToString() {
        return "--- Pirata ---\nNome: " + Nome + "\nRecompensa: " + Recompensa + " berries\n";
    }
    
    public void Atacar() {
        Console.WriteLine(Nome + " partiu para o ataque!");
    }

    public void AumentarRecompensa(double valor) {
        Recompensa += valor;
        Console.WriteLine("Recompensa de " + Nome + " aumentou para " + Recompensa + " berries.");
    }
    
}