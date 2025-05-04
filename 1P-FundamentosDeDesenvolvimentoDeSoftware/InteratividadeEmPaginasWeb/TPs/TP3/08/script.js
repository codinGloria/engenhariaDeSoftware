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
