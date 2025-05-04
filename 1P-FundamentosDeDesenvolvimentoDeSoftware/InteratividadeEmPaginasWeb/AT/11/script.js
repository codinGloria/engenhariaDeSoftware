const botao = document.getElementById("botao");

botao.addEventListener("mouseover", () => {
  botao.style.backgroundColor = "lightcoral";
});

botao.addEventListener("mouseout", () => {
  botao.style.backgroundColor = "";
});

botao.addEventListener("mousedown", () => {
  botao.textContent = "Alterado";
});
