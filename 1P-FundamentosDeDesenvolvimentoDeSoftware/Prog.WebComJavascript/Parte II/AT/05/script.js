let tuplas = [
  [3, 7],
  [5, 2],
  [8, 4],
  [1, 9],
  [6, 3],
];

let soma = 0;

for (const [a, b] of tuplas) {
  soma += a + b;
}

console.log(soma);
