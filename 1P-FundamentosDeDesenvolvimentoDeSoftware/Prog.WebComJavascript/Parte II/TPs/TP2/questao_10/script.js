let texto = prompt("Digite qualquer coisa:");
let textoInvertido = "";

let i = texto.length - 1;

while (i >= 0) {
  textoInvertido += texto[i];
  i--;
}

console.log(textoInvertido);
