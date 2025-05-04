const div = document.querySelector(".caixa");

div.classList.add("ativa");
div.classList.remove("caixa");

const botao = document.createElement("button");
botao.textContent = "Alternar Classes";
document.body.appendChild(botao);

botao.addEventListener("click", () => {
  if (div.classList.contains("ativa")) {
    div.classList.remove("ativa");
    div.classList.add("inativa");
    div.textContent = "Classe: Inativa";
  } else {
    div.classList.remove("inativa");
    div.classList.add("ativa");
    div.textContent = "Classe: Ativa";
  }
});
