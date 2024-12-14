const textos = [
  "Naruto nos ensina que nunca devemos desistir dos nossos sonhos, não importa os desafios.",
  "One Piece é um lembrete emocionante sobre amizade e perseguir o tesouro que é a própria jornada.",
  "Attack on Titan nos faz refletir sobre os limites da liberdade e o peso das escolhas.",
  "Death Note nos mostra como o poder absoluto pode corromper até os mais inteligentes.",
  "Demon Slayer encanta com suas lutas épicas e a busca de Tanjiro para salvar sua irmã Nezuko.",
  "My Hero Academia inspira mostrando que mesmo quem nasce sem poder pode se tornar um símbolo de esperança.",
  "Fullmetal Alchemist aborda as consequências do sacrifício e o valor de cada decisão na busca pela redenção.",
];

const botao = document.querySelector("button");
const container = document.getElementById("container");

botao.addEventListener("click", () => {
  const novoParagrafo = document.createElement("p");
  const textoAleatorio = textos[Math.floor(Math.random() * textos.length)];
  novoParagrafo.textContent = textoAleatorio;

  container.appendChild(novoParagrafo);
});
