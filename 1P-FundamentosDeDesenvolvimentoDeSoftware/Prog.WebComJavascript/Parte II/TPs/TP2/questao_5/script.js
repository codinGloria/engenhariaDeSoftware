const filmesNerds = [
  { titulo: "Star Wars: Episódio IV - Uma Nova Esperança", ano: 1977 },
  { titulo: "Matrix", ano: 1999 },
  { titulo: "A Origem", ano: 2010 },
  { titulo: "Guardiões da Galáxia", ano: 2014 },
  { titulo: "O Senhor dos Anéis: A Sociedade do Anel", ano: 2001 },
  { titulo: "Blade Runner: O Caçador de Andróides", ano: 1982 },
  { titulo: "De Volta para o Futuro", ano: 1985 },
  { titulo: "Spider-Man: No Aranhaverso", ano: 2018 },
  { titulo: "Jurassic Park: Parque dos Dinossauros", ano: 1993 },
  { titulo: "Vingadores: Ultimato", ano: 2019 },
  { titulo: "Harry Potter e a Pedra Filosofal", ano: 2001 },
  { titulo: "Os Caça-Fantasmas", ano: 1984 },
  { titulo: "Duna", ano: 2021 },
  { titulo: "Interstellar", ano: 2014 },
  { titulo: "X-Men: O Filme", ano: 2000 },
  { titulo: "O Quinto Elemento", ano: 1997 },
  { titulo: "WALL-E", ano: 2008 },
  { titulo: "Círculo de Fogo", ano: 2013 },
  { titulo: "A Rede Social", ano: 2010 },
  { titulo: "Scott Pilgrim contra o Mundo", ano: 2010 },
];

let ano = 0;

for (const filme of filmesNerds) {
  if (filme.titulo === "Harry Potter e a Pedra Filosofal") {
    ano = filme.ano;
  }
}

console.log("Este filme é de " + ano);
