const numero = Number(prompt("Digite um número para calcular o fatorial:"));

function calcularFatorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}
alert(`Fatorial de ${numero} é: ` + calcularFatorial(numero));
