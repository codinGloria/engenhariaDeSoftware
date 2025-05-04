async function fetchStarWarsAPI(){
    try {
        const response = await fetch("https://swapi.py4e.com/api/people");

        if (!response.ok) {
            throw new Error("Status do erro: " + response.status);
        }

        const data = await response.json();
        console.log(data);
        exibePers(data.results);
    }
    catch(e){
        console.log(e.message);
    }
}

function exibePers(personagens){
    let container = document.querySelector("main");
    personagens.forEach((personagem) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h2>${personagem.name}</h2>
            <p>Altura: ${personagem.height} cm</p>
            <p>Gênero: ${personagem.gender}</p>
            <p>Ano de nascimento: ${personagem.birth_year}</p>
        `
        container.appendChild(card);
        }
    );
}

fetchStarWarsAPI();