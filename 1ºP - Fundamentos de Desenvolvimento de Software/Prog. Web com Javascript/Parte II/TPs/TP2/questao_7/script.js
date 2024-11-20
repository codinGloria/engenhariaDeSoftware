let pergunta = prompt(
  "Digite a pergunta a ser feita: \nDeve ser respondida com sim ou não"
);

let nome, resposta;
const respostas = [];

do {
  nome = prompt("Qual é o seu nome?");

  if (nome) {
    resposta = prompt(pergunta).toLowerCase();

    while (resposta !== "sim" && resposta !== "não") {
      alert("Resposta inválida. Responda com 'sim' ou 'não'.");
      resposta = prompt(pergunta).toLowerCase();
    }
  }

  respostas.push({ nome, resposta });
} while (nome);

const totalRespostas = respostas.length;
const qntSim = respostas.filter((resp) => resp.resposta === "sim").length;
const qntNao = respostas.filter((resp) => resp.resposta === "não").length;

const percentualSim = ((qntSim / totalRespostas) * 100).toFixed(2);
const percentualNao = ((qntNao / totalRespostas) * 100).toFixed(2);

alert(`Resultado da enquete:
Total de respostas: ${totalRespostas}
Sim: ${qntSim} (${percentualSim}%)
Não: ${qntNao} (${percentualNao}%)
`);

console.log("Respostas dos participantes:");
console.log(respostas);
