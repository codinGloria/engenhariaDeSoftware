const ul = document.querySelector("ul");
const primeiroItem = ul.firstChild.nextSibling;
const ultimoItem = ul.lastElementChild;

console.log(primeiroItem.textContent);
console.log(ultimoItem.textContent);

const novoItem = document.createElement("li");
novoItem.textContent = "Item 4";
ul.appendChild(novoItem);