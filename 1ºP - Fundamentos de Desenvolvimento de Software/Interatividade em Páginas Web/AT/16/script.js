const perfilImg = document.getElementById("perfil-img");
const coracao = document.getElementById("coracao");
const comentarios = document.getElementById("comentarios");
const salvar = document.getElementById("salvar");
const imagemPost = document.getElementById("imagem-post-img");
const curtidas = document.getElementById("curtidas");
const descricao = document.querySelector(".descricao");

perfilImg.addEventListener("mouseover", () => {
  perfilImg.style.width = "80px";
  perfilImg.style.height = "80px";
});

perfilImg.addEventListener("mouseout", () => {
  perfilImg.style.width = "40px";
  perfilImg.style.height = "40px";
});

imagemPost.addEventListener("dblclick", () => {
  coracao.classList.toggle("cheio");
  if (coracao.classList.contains("cheio")) {
    curtidas.textContent = parseInt(curtidas.textContent) + 1;
  } else {
    curtidas.textContent = parseInt(curtidas.textContent) - 1;
  }
});

coracao.addEventListener("click", () => {
  coracao.classList.toggle("cheio");
  if (coracao.classList.contains("cheio")) {
    curtidas.textContent = parseInt(curtidas.textContent) + 1;
  } else {
    curtidas.textContent = parseInt(curtidas.textContent) - 1;
  }
});

comentarios.addEventListener("click", () => {
  const comentarioInput = document.createElement("input");
  comentarioInput.type = "text";
  comentarioInput.placeholder = "Digite seu comentário";
  comentarioInput.classList.add("comentario-input");
  descricao.appendChild(comentarioInput);
});

salvar.addEventListener("click", () => {
  salvar.classList.toggle("salvo");
  if (salvar.classList.contains("salvo")) {
    alert("Post salvo!");
  } else {
    alert("Post não salvo!");
  }
});
