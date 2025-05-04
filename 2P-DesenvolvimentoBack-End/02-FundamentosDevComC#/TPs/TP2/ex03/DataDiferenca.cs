namespace ex03;

public class DataDiferenca{
    
    private DateTime Data1 { get; set; } 
    private DateTime Data2 { get; set; }
    
    public DataDiferenca(DateTime data1, DateTime data2) {
        Data1 = data1;
        Data2 = data2;
    }

    public void CalcularDiferenca() {
        int dias = (Data2 - Data1).Days;
        int anos = dias / 365;
        int meses = (dias % 365) / 30;
        dias = (dias % 365) % 30;
        
        string resultado = "";
        
        if (anos > 0) {
            string anoTexto = anos == 1 ? "ano" : "anos";
            resultado += $"{anos} {anoTexto}";
        }

        if (meses > 0) {
            if (resultado != "") resultado += ", "; 
            string mesTexto = meses == 1 ? "mês" : "meses";
            resultado += $"{meses} {mesTexto}";
        }

        if (dias > 0) {
            if (resultado != "") resultado += " e "; 
            string diaTexto = dias == 1 ? "dia" : "dias";
            resultado += $"{dias} {diaTexto}";
        }
        Console.WriteLine($"Diferença: {resultado}");
    }
}