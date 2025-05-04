let buttons = document.getElementsByClassName("verificar");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let tr = buttons[i].closest("tr");
    let nota = tr.querySelector(".nota");
    let valorNota = parseFloat(nota.textContent);

    if (valorNota >= 5) {
      tr.classList.add("verde");
    } else {
      tr.classList.add("vermelho");
    }
  });
}
