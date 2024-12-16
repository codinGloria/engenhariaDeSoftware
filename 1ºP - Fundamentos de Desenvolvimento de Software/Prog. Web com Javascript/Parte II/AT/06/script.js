let numeros = [3, 1, 2, 5];
let contagens = [];

for (let numero of numeros) {
  let contagem = [];
  for (let i = 1; i <= numero; i++) {
    contagem.push(i);
  }
  contagens.push(contagem);
}

console.log(contagens);
