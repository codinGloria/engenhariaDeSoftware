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

const matrix = filmes.indexOf("Matrix");
filmes.splice(matrix, 1);

const senhorDosAneis = filmes.indexOf("Senhor dos Anéis");
filmes.splice(senhorDosAneis, 1, 
    "Senhor dos Anéis: A Sociedade do Anel",
    "Senhor dos Anéis: As Duas Torres",
    "Senhor dos Anéis: O Retorno do Rei"
 );
 console.log(filmes);