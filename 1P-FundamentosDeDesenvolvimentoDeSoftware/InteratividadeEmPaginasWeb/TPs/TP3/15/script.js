const container = document.getElementById("container");

container.addEventListener("click", () => {
  const span = container.querySelector("span");

  span.textContent = "teste";
});
