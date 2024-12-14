document.getElementById("adicionar").addEventListener("click", () => {
  const tabela = document.getElementById("tabela").querySelector("tbody");
  const novaLinha = tabela.insertRow();
  for (let i = 0; i < 4; i++) {
    const celula = novaLinha.insertCell();
    celula.innerText = `Dado ${i + 1}`;
  }
});

/* QUESTÃO 11 */
const botaoRemover = document.createElement("button");
botaoRemover.innerText = "Remover Linha";
botaoRemover.id = "remover";
document.body.appendChild(botaoRemover);

botaoRemover.addEventListener("click", () => {
  if (tabela.rows.length > 0) {
    tabela.deleteRow(0);
  } else {
    alert("Não há mais linhas para remover.");
  }
});
