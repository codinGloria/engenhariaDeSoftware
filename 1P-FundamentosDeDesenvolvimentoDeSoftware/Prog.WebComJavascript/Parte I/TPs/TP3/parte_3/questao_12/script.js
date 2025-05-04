let valorDaCompra = Number(prompt("Qual o valor da compra?"));
let comprador = prompt("Você é \n(A) gestante \n(B) Aposentado \n(C) Pensionista");
let total = 0.0;

switch (comprador.toUpperCase()) {
    case "A":
        if (valorDaCompra >= 80) {
            total = valorDaCompra * 0.80; 
        } else {
            total = valorDaCompra * 0.85;
        }
        break;
    case "B": 
        if (valorDaCompra >= 80) {
            total = valorDaCompra * 0.85;
        } else {
            total = valorDaCompra * 0.90; 
        }
        break;
    case "C": 
        if (valorDaCompra >= 80) {
            total = valorDaCompra * 0.90; 
        } else {
            total = valorDaCompra * 0.95;
        }
        break;
    default:
        alert("Tipo de consumidor inválido.");
        total = null;
        break;
}

if (total !== null) {
    alert("O valor final da compra é: R$ " + total.toFixed(2));
}