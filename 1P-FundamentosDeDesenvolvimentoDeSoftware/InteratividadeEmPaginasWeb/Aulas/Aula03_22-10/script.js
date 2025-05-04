let meuTexto = document.getElementById("texto");

// Alteração de texto simples com textContent e innerText
meuTexto.textContent = "Esse é meu texto alterado";
meuTexto.innerText = "Texto que foi alterado de novo";

// alterações pouco mais complexas, innerHTML
meuTexto.innerHTML = "Novo texto <em>que acabei de inserir</em> no script."

// selecionando por query, pega o 1º elemento encontrado com esse nome
let rodape = document.querySelector("footer");

// atualizando estilos rapidamente pelo JS
rodape.style.backgroundColor = "pink";
rodape.style.fontSize = "32px";
rodape.style.display = "flex";
rodape.style.justifyContent = "center";
rodape.style.alignItems = "center";
rodape.style.padding = "30px";

// selecionando por classe
console.log(document.getElementsByClassName("lista"));

// seleciona todos elementos com o mesmo nome (usando o . chama as classes, # os ids)
console.log(document.querySelectorAll(".lista"));

// selecionando por classe, usando indexação
let itemLista = document.querySelectorAll(".lista")[0];
itemLista.setAttribute("style", "background-color: steelblue;");
itemLista.setAttribute("id", "borda");

// console.log(rodape);