const frase =
  "the only thing necessary for the triumph of evil is for good men to do nothing";

const palavras = frase.split(" ");

for (let i in palavras) {
  palavras[i] = palavras[i][0].toUpperCase() + palavras[i].slice(1);
}

const fraseModificada = palavras.join(" ");
console.log(fraseModificada);
