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

const deVoltaParaOFuturo = filmes.indexOf("De Volta para o Futuro");
filmes.splice(deVoltaParaOFuturo - 1, 3);
console.log(filmes);