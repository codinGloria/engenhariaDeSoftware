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

/* ******** Exercicio 06 ******** */
const primeiroParagrafo = document.createElement("p");
primeiroParagrafo.id = "primeiro";
primeiroParagrafo.textContent = "Este é o primeiro parágrafo.";

const segundoParagrafo = document.createElement("p");
segundoParagrafo.id = "segundo";
segundoParagrafo.textContent = "Este é o segundo parágrafo.";

const heading = document.createElement("h2");
heading.textContent = "Título entre parágrafos";

document.body.appendChild(primeiroParagrafo);
document.body.appendChild(segundoParagrafo);
document.body.insertBefore(heading, segundoParagrafo);
