const input = document.querySelector("input");
const botaoAdicionar = document.getElementById("adicionar");
const lista = document.getElementById("lista");

botaoAdicionar.addEventListener("click", () => {
  const tarefaTexto = input.value;

  if (tarefaTexto) {
    const li = document.createElement("li");
    li.textContent = tarefaTexto;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover Tarefa";
    botaoRemover.addEventListener("click", () => {
      lista.removeChild(li);
    });

    li.appendChild(botaoRemover);
    lista.appendChild(li);

    input.value = "";
  }
});
