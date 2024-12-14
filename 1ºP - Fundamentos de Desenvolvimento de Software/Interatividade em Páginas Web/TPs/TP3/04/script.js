const darkModeToggle = document.getElementById("darkModeToggle");

document.body.classList.add("light=mode");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Light Mode";
  } else {
    darkModeToggle.textContent = "Dark Mode";
  }
});

/* QUESTÃO 04 */
const navElement = document.querySelector("nav");

const destaqueImg = document.createElement("img");

destaqueImg.src = "./assets/all.jpg";
destaqueImg.alt = "Imagem de destaque personagens Arcane";
destaqueImg.title = "Destaque Arcane";
destaqueImg.style.width = "100%";
destaqueImg.style.display = "block";

navElement.insertAdjacentElement("afterend", destaqueImg);
