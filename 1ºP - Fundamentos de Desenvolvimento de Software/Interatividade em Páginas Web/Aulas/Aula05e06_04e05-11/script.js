// document.body.innerHTML += "<div id='teste'> Algum Conteúdo </div>";

let menuAdmin = document.createElement("li");
menuAdmin.textContent = "Manutenção";
menuAdmin.classList.add("menuItem");

let listaMenu = document.querySelector("ul");
// listaMenu.appendChild(menuAdmin);

let menuRel = document.createElement("li");
menuRel.textContent = "Relatórios";
menuRel.classList.add("menuItem");
// listaMenu.insertBefore(menuRel, listaMenu.firstElementChild.nextElementSibling);
// listaMenu.insertBefore(menuRel, listaMenu.children[1]);
console.log(listaMenu.children.length);

let admin = document.createElement("li");
admin.textContent = "Administrador";
admin.classList.add("menuItem");
// listaMenu.replaceChild(admin, listaMenu.lastElementChild);

let imagem = document.createElement("img");
imagem.setAttribute(
    "src", 
    "https://www.specialdog.com.br/assets/uploads/images/gateirosdeprimeiraviagem.png"
);
imagem.setAttribute("alt", "Dois gatinhos laranjinhas fofinhos");
document.body.appendChild(imagem);

// listaMenu.children[2].remove();
// document.querySelector("h1").remove();

let menuMapa = menuAdmin.cloneNode(true);
menuMapa.textContent = "Mapa";
// listaMenu.appendChild(menuMapa);
console.log(menuMapa);

// let cardNovo = document.createElement("div");
// cardNovo.className = "card";
// let ancora = document.createElement("a");
// ancora.setAttribute("title", "titulo teste");
// ancora.setAttribute("target", "_blank");
// ancora.setAttribute("href", "https://www.cnnbrasil.com.br/tecnologia/gatos-sao-liquidos-phd-em-fisica-viraliza-com-estudos-que-dizem-que-sim/");

let cardNovo = document.querySelector(".card").cloneNode(true);
// Clonei o card...
// Acessei o filho dele e alterei os atributos necessários
cardNovo.children[0].setAttribute("href", "https://terrabrasilnoticias.com/2024/11/pessoas-que-tem-gatos-correm-menos-risco-de-ter-problemas-cardiovasculares/")
cardNovo.children[0].setAttribute("title", "gatinhos");
// acessei o filho do ancora = div.image
cardNovo.children[0].firstElementChild.children[0].setAttribute("src", "https://terrabrasilnoticias.com/wp-content/uploads/2024/11/gatos_1731182811973-750x375.jpg.webp");
// volto para acessar o irmão do pai que é o titulo
cardNovo.children[0].firstElementChild.nextElementSibling.textContent = "Pessoas que têm gatos correm menos risco de ter problemas cardiovasculares";
cardNovo.children[0].lastElementChild.textContent = "Estudos demonstram que acompanhar um gato pode estar correlacionado a uma série de benefícios para a saúde"

let pai = document.querySelector(".pai");
pai.appendChild(cardNovo);

let cardNew = document.createElement("div");
cardNew.className = "card";
cardNew.innerHTML = "<a href='https://exame.com/mundo/gato-de-schrodinger-vive-por-23-minutos-em-laboratorio-na-china/' target='_blank' title='Sobre gatoss'><div class='image'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEc32uCaOmFxJmYo19v2lkS-3W1MXijcy9oA&s' alt='Gato Schrodinger' title='Gatinho Schrodinger'></div><div class='titulo'>Gato de Schrödinger 'vive' por 23 minutos em laboratório na China</div><div class='descricao'>Considerado um avanço crucial para física quântica</div></a>";
pai.appendChild(cardNew);

let cardTeste = document.createElement("div");
cardTeste.className = "card";
let obj = cardNew.innerHTML;
cardTeste.innerHTML = obj;
cardTeste.children[0].setAttribute("href", "https://www.cnnbrasil.com.br/lifestyle/mais-de-um-terco-dos-tutores-consideram-seu-pet-a-coisa-mais-importante-na-vida/")
cardTeste.children[0].setAttribute("title", "gatinhos");
cardTeste.children[0].firstElementChild.children[0].setAttribute("src", "https://www.indaiatuba.sp.gov.br/relacoes-institucionais/imprensa/noticias/mini_adocao.jpg");
cardTeste.children[0].firstElementChild.nextElementSibling.textContent = "Mais de 1/3 dos tutores consideram seu pet a coisa + importante";
cardTeste.children[0].lastElementChild.textContent = "Estudo aponta que metade das pessoas ao redor do mundo tem um pet";
pai.appendChild(cardTeste);

/* ********** APRENDENDO SOBRE EVENTOS, E FUNÇÕES **********
EXEMPLOS DE ONCLICK:
1) atribuindo no HTML
2) criando função usando .onclick
3) usando eventos
*/

function ola(){
    alert("Olá! Recebi o click :]");
}

let headerT = document.querySelector("header");
headerT.onclick = function(){
    alert("Bem-vindx!! ");
}

document.querySelector(".card").addEventListener("click", function(){
    alert("Sou um evento listener :]")
});