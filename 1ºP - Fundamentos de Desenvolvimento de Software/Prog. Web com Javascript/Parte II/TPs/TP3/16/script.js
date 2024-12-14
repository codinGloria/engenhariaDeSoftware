function mapearArray(arr) {
  return arr.map((num) => Math.sqrt(num));
}

const numeros = prompt("Digite 5 números separados por vírgula:")
  .split(",")
  .map(Number);
alert(mapearArray(numeros));
