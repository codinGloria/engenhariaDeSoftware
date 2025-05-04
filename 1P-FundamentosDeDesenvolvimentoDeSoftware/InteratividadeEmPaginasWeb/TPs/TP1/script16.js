let conteudo = document.querySelector(".conteudo");

conteudo.onclick = function () {
  this.style.backgroundColor = "blue";
  this.style.color = "white";
  this.style.border = "2px orange solid";
  this.style.width = this.offsetWidth + 2 + "px";
  this.style.height = this.offsetHeight + 2 + "px";
};
