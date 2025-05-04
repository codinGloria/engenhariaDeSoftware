let divModal = document.getElementById("modal");
divModal.classList.add("hide");

let button = document.querySelector("button");

button.onclick = function () {
  divModal.classList.remove("hide");
};

let imagem = document.getElementById("close");
imagem.onclick = function () {
  divModal.classList.add("hide");
};
