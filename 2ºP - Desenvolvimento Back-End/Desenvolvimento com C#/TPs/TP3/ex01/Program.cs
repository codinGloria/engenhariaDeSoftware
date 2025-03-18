namespace ex01;

public class Program {
    public static void Main(string[] args) {
        Pirata p1 = new Pirata();
        p1.Nome = "Zoro";
        p1.Recompensa = 32000;

        Pirata p2 = new Pirata("Luffy", 100000);
        
        p2.Atacar();
        p1.AumentarRecompensa(10);

        Console.WriteLine(p1);
        Console.WriteLine(p2);
    }
}