let peso = Number(prompt("Insira seu peso:"));
let altura = Number(prompt("Insira sua altura:"));

const IMC = peso / (altura * altura);

alert(IMC.toFixed(2));

if (IMC < 16) {
    alert("Baixo peso (grau I)");
} else if (IMC >= 16 && IMC <= 16.99) {
    alert("Baixo peso (grau II)");
} else if (IMC >= 17 && IMC <= 18.49) {
    alert("Baixo peso (grau III)");
} else if (IMC >= 18.5 && IMC <= 24.99) {
    alert("Peso adequado");
} else if (IMC >= 25 && IMC <= 29.99) {
    alert("Sobrepeso");
} else if (IMC >= 30 && IMC <= 34.99) {
    alert("Obesidade (grau I)");
} else if (IMC >= 35 && IMC <= 39.99) {
    alert("Obesidade (grau II)");
} else if (IMC >= 40) {
    alert("Obesidade (grau III)");
} else {
    alert("Erro: valor inválido");
}