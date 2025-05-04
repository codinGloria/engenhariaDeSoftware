const ul = document.querySelector("ul");

document.getElementById("remover").addEventListener("click", () => {
  ul.lastElementChild.remove();
});

document.getElementById("adicionar").addEventListener("click", () => {
  const novoItem = document.createElement("li");
  novoItem.textContent = "Novo Item";
  ul.appendChild(novoItem);
});
