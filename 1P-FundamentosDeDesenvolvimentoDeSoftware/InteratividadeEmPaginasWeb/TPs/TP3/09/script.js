const origem = document.getElementById("origem");
const destino = document.getElementById("destino");

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id || e.target.outerHTML);
    e.dataTransfer.effectAllowed = "move";
    e.target.classList.add("dragging");
  });

  item.addEventListener("dragend", () => {
    e.target.classList.remove("dragging");
  });
});

[origem, destino].forEach((area) => {
  area.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    area.classList.add("drag-over");
  });

  area.addEventListener("dragleave", () => {
    area.classList.remove("drag-over");
  });

  area.addEventListener("drop", (e) => {
    e.preventDefault();
    area.classList.remove("drag-over");

    const draggedContent = e.dataTransfer.getData("text/plain");
    const draggedElement = document.createElement("div");
    draggedElement.innerHTML = draggedContent.trim();
    draggedElement.firstChild.setAttribute("draggable", "true");

    draggedElement.firstChild.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.outerHTML);
    });

    const dropTarget = document.elementFromPoint(e.clientX, e.clientY);
    if (dropTarget.classList.contains("item")) {
      dropTarget.insertAdjacentElement("afterend", draggedElement.firstChild);
    } else {
      area.appendChild(draggedElement.firstChild);
    }
  });
});

/* QUESTÃO 09 */
const resetButton = document.createElement("button");
resetButton.innerText = "Resetar Itens";
resetButton.classList.add("reset-btn");
document.body.appendChild(resetButton);

const clickCounter = document.createElement("p");
clickCounter.innerText = "Você clicou 0 vezes.";
clickCounter.classList.add("counter-text");
document.body.appendChild(clickCounter);

let clickCount = 0;

const originalItems = Array.from(origem.querySelectorAll(".item")).map((item) =>
  item.cloneNode(true)
);

function resetDragAndDropListeners() {
  document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.id || e.target.outerHTML);
      e.dataTransfer.effectAllowed = "move";
      e.target.classList.add("dragging");
    });

    item.addEventListener("dragend", () => {
      e.target.classList.remove("dragging");
    });
  });
}

resetButton.addEventListener("click", () => {
  origem.innerHTML = "";
  originalItems.forEach((item) => origem.appendChild(item.cloneNode(true)));

  destino.innerHTML = "<p>Arraste os itens para cá!</p>";

  resetDragAndDropListeners();

  clickCount++;
  clickCounter.innerText = `Você clicou ${clickCount} ${
    clickCount === 1 ? "vez" : "vezes"
  }.`;
});

resetDragAndDropListeners();
