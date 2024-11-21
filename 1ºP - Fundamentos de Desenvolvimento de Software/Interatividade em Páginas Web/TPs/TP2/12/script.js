const botaoInserir = document.createElement("button");
botaoInserir.textContent = "Inserir";

document.body.appendChild(botaoInserir);

botaoInserir.addEventListener("click", () => {
  let lista = document.getElementById("lista");

  if (!lista) {
    lista = document.createElement("ul");
    lista.id = "lista";
    document.body.appendChild(lista);
  }

  const novoItem = document.createElement("li");
  novoItem.textContent = "Nova entrada";

  lista.appendChild(novoItem);
});
