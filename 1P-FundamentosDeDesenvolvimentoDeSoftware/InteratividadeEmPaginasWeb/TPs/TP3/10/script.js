document.getElementById("adicionar").addEventListener("click", () => {
  const tabela = document.getElementById("tabela").querySelector("tbody");
  const novaLinha = tabela.insertRow();
  for (let i = 0; i < 4; i++) {
    const celula = novaLinha.insertCell();
    celula.innerText = `Dado ${i + 1}`;
  }
});
