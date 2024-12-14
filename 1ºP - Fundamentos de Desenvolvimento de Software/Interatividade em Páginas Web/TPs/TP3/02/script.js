const imagem = document.querySelector("img");
const mensagem = document.getElementById("mensagem");

imagem.addEventListener("load", () => {
  imagem.style.border = "5px solid green";
  imagem.style.height = "300px";
  mensagem.textContent = "Imagem carregada com sucesso!";
});
