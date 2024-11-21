const lista = document.createElement("ul");

const itens = ["Sobre", "Lojas", "Produtos", "Contato"];
itens.forEach((itemTexto) => {
  const item = document.createElement("li");
  item.textContent = itemTexto;
  item.style.backgroundColor = "steelblue";
  item.style.color = "white";
  item.style.fontFamily = "Arial, sans-serif";
  item.style.border = "1px solid black";
  lista.appendChild(item);
});

document.body.appendChild(lista);
