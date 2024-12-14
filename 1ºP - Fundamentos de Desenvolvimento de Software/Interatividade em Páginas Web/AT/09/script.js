const botao = document.querySelector("button");

botao.addEventListener("click", () => {
  console.log("Botão clicado!");
  botao.textContent = "Botão clicado!";
});

botao.addEventListener("mouseover", () => {
  botao.style.backgroundColor = "steelblue";
});

botao.addEventListener("mouseout", () => {
  botao.style.backgroundColor = "";
});
