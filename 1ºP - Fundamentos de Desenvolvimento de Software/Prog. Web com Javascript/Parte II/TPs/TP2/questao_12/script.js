const time = prompt("Nome do time:");
const vitorias = Number(prompt("Número de vitórias:"));
const empates = Number(prompt("Número de empates:"));
const derrotas = Number(prompt("Número de derrotas:"));

function calcularPontos(vitorias, empates, derrotas) {
  const pontos = vitorias * 3 + empates;
  const jogos = vitorias + empates + derrotas;
  console.log(`Pontos totais: ${pontos}`);
  console.log(`Média por jogo: ${(pontos / jogos).toFixed(2)}`);
}

calcularPontos(vitorias, empates, derrotas);
