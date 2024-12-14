const caixinhas = document.querySelectorAll(".caixinha");
const containers = document.querySelectorAll(".container");

caixinhas.forEach((caixinha) => {
  caixinha.setAttribute("draggable", true);

  caixinha.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text", event.target.className);
  });
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
