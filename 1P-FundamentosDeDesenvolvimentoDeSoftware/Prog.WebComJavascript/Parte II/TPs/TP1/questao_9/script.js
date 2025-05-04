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

const inicio = filmes.indexOf("Senhor dos Anéis");
const fim = filmes.indexOf("Matrix");
const filmesSelecionados = filmes.slice(inicio + 1, fim);
console.log(filmesSelecionados);