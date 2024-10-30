/* ********** MANIPULANDO ELEMENTOS **********
titulo = document.querySelector("h1");

// trocando o background
titulo.style.backgroundColor = "yellow";

// alterando atributos
titulo.setAttribute("style", "background-color: yellow");

// criando uma classe no CSS e atualizando o atributo classe
titulo.setAttribute("class", "yellowColor");

//  alterando o nome da classe
titulo.className = "yellowColor";

// adicionando numa lista de classes
titulo.classList.add("yellowColor");

// removendo uma classe
titulo.classList.remove("yellowColor");

// altera de uma classe para outra
titulo.classList.replace("yellowColor", "nova");

// procura se contem 
if (titulo.classList.contains("borda")){
    alert("Eu tenho a classe borda sim!");
    titulo.classList.remove("nova");
}*/

let body = document.body;
let paragrafo = document.querySelectorAll("p")[0];
let img = document.querySelector("img");

paragrafo.removeAttribute("class");

function toggleDark(){
    body.classList.toggle("dark");
    img.classList.toggle("showHide");
};

img.onclick = function(){
    this.setAttribute("title", "Logo INFNET 30 anos");
    this.setAttribute("alt", "INFNET");
    alert(this.getAttribute("src"));
    if(img.getAttribute("alt") === "INFNET"){
        img.setAttribute("alt", "INFNET 30 anos");
    } else {
        img.setAttribute("alt", "INFNET e você!");
    }
}

let nomeUser = prompt("Escreva seu nome: ");
alert(nomeUser);

