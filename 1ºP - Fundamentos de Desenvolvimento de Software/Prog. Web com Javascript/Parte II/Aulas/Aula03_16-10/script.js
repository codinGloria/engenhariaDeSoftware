const filmes = [
    /* 00 */ "Coração de Cavaleiro",
    /* 01 */ "Deadpool",
    /* 02 */ "V de Vendetta",
    /* 03 */ "Matrix",
    /* 04 */ "Homens de Honra",
    /* 05 */ "Interstellar",
    /* 06 */ "Como se Fosse a Primeira Vez",
    /* 07 */ "Minha mãe é uma peça",
    /* 08 */ "Click",
    /* 09 */ "Gente Grande",
    /* 10 */ "Atividade Paranormal",
    /* 11 */ "Batman Begins",
    /* 12 */ "A Rede Social",
    /* 13 */ "Náufrago",
    /* 14 */ "Senhor dos Anéis",
    /* 15 */ "Harry Potter",
    /* 16 */ "Pulp Fiction",
    /* 17 */ "Cidadão Kane",
    /* 18 */ "E o vento levou",
    /* 19 */ "Kill Bill",
    /* 20 */ "Click"
  ];

const [
    primeiroFilme, 
    segundoFilme, 
    terceiroFilme, 
    , // quando é preciso por exemplo o 5 filme, pode colocar os outros somente com a ,
    quintoFilme,
    ...filmesRestantes // deve SEMPRE ser o último
] = filmes;

const { 
    13: naufragoAqui, 
    14: senhorDosAneisAqui 
} = filmes; // nesse exemplo voce pode dizer o indice e criar uma variavel a partir dele

const ultimoFilme = filmes[filmes.length - 1]; // retorna sempre o ultimo 
const penultimoFilme = filmes.at(- 2); // um método igual o de chamar por []

const caixinhaA = [
    "roxo",
    "laranja",
    "verde"
];

const caixinhaB = [
    "vermelho",
    "amarelo",
    "azul"
];

const caixinhaC = [
    ...caixinhaA,
    ...caixinhaB,
    "verde escuro",
    "lilas"
];

// const caixinhaC = caixinhaA.concat(caixinhaB); // junta os dois vetores, pode ser colocada uma , e adicionar mais, exemplo: caixinhaA.concat(caixinhaB, "verde escuro", "lilás");

const indice = filmes.indexOf("Click"); //mostra qual o indice, o primeiro que aparece de cima p baixo
const indiceReverso = filmes.lastIndexOf("Click"); // mostra o primeiro, mas de baixo p cima. (ultimo indice)

filmes.splice(filmes.indexOf("Como se Fosse a Primeira Vez") + 1, 1);