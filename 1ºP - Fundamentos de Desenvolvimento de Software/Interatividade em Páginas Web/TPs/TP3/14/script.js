const inputTexto = document.getElementById("texto");
const spanNome = document.getElementById("nome");

inputTexto.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    spanNome.textContent = inputTexto.value.trim();

    inputTexto.value = "";
  }
});
