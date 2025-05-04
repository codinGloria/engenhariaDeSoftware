const fibonacci = [0, 1];

while (true) {
  let proximo =
    fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  if (proximo > 55) break;
  fibonacci.push(proximo);
}

console.log("Sequência de Fibonacci até 55", fibonacci);
