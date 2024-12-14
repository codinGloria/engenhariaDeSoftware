const deputadosDiv = document.getElementById("deputados");
const buscaInput = document.getElementById("busca");
const buscarButton = document.getElementById("buscar");

async function buscarDeputados() {
  const response = await fetch(
    "https://dadosabertos.camara.leg.br/api/v2/deputados"
  );
  const deputados = await response.json();

  deputados.dados.forEach((deputado) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <h2>${deputado.nome}</h2>
            <p>Partido: ${deputado.siglaPartido}</p>
            <p>UF: ${deputado.siglaUf}</p>
            <img src="${deputado.urlFoto}" alt="${deputado.nome}" style="width:100%">
        `;
    deputadosDiv.appendChild(card);
  });
}

buscarDeputados();

buscarButton.addEventListener("click", () => {
  const busca = buscaInput.value;
  if (busca) {
    deputadosDiv.innerHTML = "";
    fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados?nome=${busca}`)
      .then((response) => response.json())
      .then((deputados) => {
        deputados.dados.forEach((deputado) => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
                        <h2>${deputado.nome}</h2>
                        <p>Partido: ${deputado.siglaPartido}</p>
                        <p>UF: ${deputado.siglaUf}</p>
                        <img src="${deputado.urlFoto}" alt="${deputado.nome}" style="width:100%">
                    `;
          deputadosDiv.appendChild(card);
        });
      });
  }
});
