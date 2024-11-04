const filmes = [
    "Mamma Mia",
    "Shrek",
    "Senhor dos Anéis",
    "Guardiões da Galáxia",
    "Footloose",
    "Uma linda mulher",
    "Matrix",
    "Ghost",
    "Interestelar",
    "De Volta para o Futuro",
    "Madagascar",
    "Kimi no Suizou wo Tabetai"
];

const filmesRemovidos = filmes.splice(2, 5, "Divergente", "Brothers", "Good Will Hunting");
console.log(filmesRemovidos);