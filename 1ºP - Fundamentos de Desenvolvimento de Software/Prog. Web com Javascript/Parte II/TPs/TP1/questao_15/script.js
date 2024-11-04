let contador = 0;

while (true) {
  if (Math.random() < 0.75) {
    contador++;
  }

  console.log("Contador: " + contador);

  if (Math.random() < 0.1) {
    console.log("Loop finalizado.");
    break;
  }
}
