let numeros = [
  1,
  [7, 2, [1, 2, 3, [4, [5, [4, 2, 6, [7, [8, [1, 2, 3, 9, [1, 10]]]]]]]]],
];

function somar(numeros) {
  return numeros.reduce(
    (soma, num) => soma + (Array.isArray(num) ? somar(num) : num),
    0
  );
}

console.log(somar(numeros));
