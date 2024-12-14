function ordenarDecrescente(a, b, c) {
  return [a, b, c].sort((x, y) => y - x);
}

const valores = prompt("Digite três números separados por vírgula:")
  .split(",")
  .map(Number);
alert(ordenarDecrescente(...valores));
