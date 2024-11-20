const numerosA = [1, 2, 3];
const numerosB = [4, 5, 6];
const numerosC = [7, 8, 9];

let soma = 0;

for (const numero of [...numerosA, ...numerosB, ...numerosC]) {
  soma += numero;
}

console.log(soma);
