let algunsNumeros = [
  1, 2, 3, 5, 7, 8, 9, 13, 17, 20, 21, 303, 1001, 1002, 1003,
];

function ehPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let i = 0;
while (i < algunsNumeros.length) {
  if (!ehPrimo(algunsNumeros[i])) {
    algunsNumeros.splice(i, 1);
  } else {
    i++;
  }
}

console.log(algunsNumeros);
