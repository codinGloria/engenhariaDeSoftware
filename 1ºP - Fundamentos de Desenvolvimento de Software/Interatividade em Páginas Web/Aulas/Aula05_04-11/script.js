// document.body.innerHTML += "<div id='teste'> Algum Conteúdo </div>";

let menuAdmin = document.createElement("li");
menuAdmin.textContent = "Manutenção";
menuAdmin.classList.add("menuItem");

let listaMenu = document.querySelector("ul");
listaMenu.appendChild(menuAdmin);

let menuRel = document.createElement("li");
menuRel.textContent = "Relatórios";
menuRel.classList.add("menuItem");
// listaMenu.insertBefore(menuRel, listaMenu.firstElementChild.nextElementSibling);
listaMenu.insertBefore(menuRel, listaMenu.children[1]);
console.log(listaMenu.children.length);

let admin = document.createElement("li");
admin.textContent = "Administrador";
admin.classList.add("menuItem");
listaMenu.replaceChild(admin, listaMenu.lastElementChild);

let imagem = document.createElement("img");
imagem.setAttribute(
    "src", 
    "https://www.specialdog.com.br/assets/uploads/images/gateirosdeprimeiraviagem.png"
);
imagem.setAttribute("alt", "Dois gatinhos laranjinhas fofinhos");
document.body.appendChild(imagem);

listaMenu.children[2].remove();
document.querySelector("h1").remove();

let menuMapa = menuAdmin.cloneNode(true);
menuMapa.textContent = "Mapa";
listaMenu.appendChild(menuMapa);
console.log(menuMapa);