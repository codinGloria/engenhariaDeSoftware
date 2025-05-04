namespace OOPv3;

class Program {
    static void Main(string[] args) {
        
        string[] names = {"Zoro", "Nami", "Robin", "Luffy"};
        double[] grades1 = {7, 8, 10, 6};
        double[] grades2 = {6, 7, 10, 4};
        double average;
        
        for (int i = 0; i < names.Length; i++) {
            Console.WriteLine(names[i] + ": " + grades1[i] + " - " + grades2[i]);
        }

        for (int i = 0; i < names.Length; i++) {
            average = (grades1[i] + grades2[i]) / 2;
            Console.WriteLine("--------------------");
            if (average >= 6) {
                Console.WriteLine(names[i] + " approved! Average: " + average);
            } else {
                Console.WriteLine(names[i] + " reproved! Average: " + average);
            }
        }
    }
}