const cores = ["corVerde", "corRoxa", "corLaranja", "corVermelha"];
const botaoCriar = document.querySelector("button");
const divNovo = document.getElementById("novo");
const containers = document.querySelectorAll(".container");

botaoCriar.addEventListener("click", () => {
  const novaCaixinha = document.createElement("div");
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  novaCaixinha.className = `caixinha ${corAleatoria}`;
  novaCaixinha.setAttribute("draggable", true);

  novaCaixinha.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text", event.target.className);
  });

  divNovo.appendChild(novaCaixinha);
});

containers.forEach((container) => {
  container.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  container.addEventListener("drop", (event) => {
    event.preventDefault();
    const className = event.dataTransfer.getData("text");
    const elemento = document.querySelector(
      `.${className.split(" ").join(".")}`
    );
    if (elemento) {
      container.appendChild(elemento);
    }
  });
});
