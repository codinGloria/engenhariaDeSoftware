let paragrafos = document.getElementsByClassName("conteudo");

for (let i = 0; i < paragrafos.length; i++) {
  paragrafos[i].classList.add("hide");
}

let divArccodion = document.getElementsByClassName("accordion-item");

for (let i = 0; i < divArccodion.length; i++) {
  divArccodion[i].addEventListener("click", function () {
    let paragrafoFilho = this.querySelector("p");
    if (this.classList.contains("ativo")) {
      paragrafoFilho.classList.add("hide");
      this.classList.remove("ativo");
    } else {
      for (let j = 0; j < divArccodion.length; j++) {
        let paragrafoVizinhos = divArccodion[j].querySelector("p");
        if (paragrafoVizinhos) {
          paragrafoVizinhos.classList.add("hide");
        }
        paragrafoVizinhos.classList.remove("ativo");
      }

      if (paragrafoFilho) {
        paragrafoFilho.classList.remove("hide");
      }
      this.classList.add("ativo");
    }
  });
}
