const lista = document.getElementById("lista");

lista.addEventListener("click", () => {
  const acreItem = Array.from(lista.children).find(
    (item) => item.innerText === "Acre"
  );

  if (acreItem) {
    acreItem.innerText = "Amapá";

    acreItem.style.backgroundColor = "blue";
    acreItem.style.color = "white";
  }
});
