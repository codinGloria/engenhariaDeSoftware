let button = document.getElementById("trocarClasses");

button.onclick = function () {
  let linhas = document.querySelectorAll("tr");
  for (linha of linhas) {
    if (linha.classList.contains("azul")) {
      linha.classList.remove("azul");
      linha.classList.add("vermelho");
    } else if (linha.classList.contains("vermelho")) {
      linha.classList.remove("vermelho");
      linha.classList.add("azul");
    }
  }
};
