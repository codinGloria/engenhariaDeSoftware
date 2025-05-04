function fatorial(n) {
  return n === 0 ? 1 : n * fatorial(n - 1);
}

const numeroFatorial = prompt("Digite um número para calcular o fatorial:");

const resultado = fatorial(Number(numeroFatorial));

const elementoResultado = document.getElementById("resultado");
elementoResultado.innerText = `O fatorial de ${numeroFatorial} é ${resultado}.`;
