const filmes = [
    "Mamma Mia",
    "Shrek",
    "Senhor dos Anéis",
    "Guardiões da Galáxia",
    "Footloose",
    "Uma linda mulher",
/**/"Matrix",
    "Ghost",
    "Interestelar",
    "De Volta para o Futuro",
    "Madagascar",
    "Kimi no Suizou wo Tabetai"
];

const metade = prompt("Primeira ou segunda metade do vetor?");

if (metade.toLowerCase() !== "primeira" && metade.toLowerCase() !== "segunda") {
    alert("Resposta inválida! Escolha primeira ou segunda.");
} else {
    const numFilmes = parseInt(prompt("Quantos filmes? (1 - 3)"));

    if (isNaN(numFilmes) || numFilmes < 1 || numFilmes > 3){
        alert("Número inválido! Escolha entre 1 e 3");
    } else {
        let inicioMetade, fimMetade;

        if (metade === "primeira") {
            inicioMetade = 0;
            fimMetade = Math.floor(filmes.length / 2);
        } else {
            inicioMetade = Math.floor(filmes.length / 2);
            fimMetade = filmes.length;
        }

        let metadeEscolhida = filmes.slice(inicioMetade, fimMetade);

        let selecionados = [];
        for (let i = 0; i < numFilmes; i++) {
            let indiceAleatorio = Math.floor(Math.random() * metadeEscolhida.length);
            selecionados.push(metadeEscolhida[indiceAleatorio]);
            metadeEscolhida.splice(indiceAleatorio, 1);
        }

        console.log("Filmes selecionados: " + selecionados);
    }
}