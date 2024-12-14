const mensagem = document.getElementById("info");

window.addEventListener("load", () => {
  console.log("Página carregada!");

  const linguagem = navigator.language;
  const url = window.location.href;

  mensagem.textContent = `Linguagem: ${linguagem} - URL: ${url}`;
});

window.addEventListener("load", () => {
  if (info.textContent !== "") {
    alert("Informações inseridas na página!");
    window.location.href = "https://www.infnet.edu.br/";
  }
});
