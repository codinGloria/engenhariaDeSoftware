/* Manipulando elementos */

const filmes = [
    'Coração de Cavaleiro', // elemento ou índice
    'Deadpool',
    'V de Vendetta',
    'Matrix',
    'Homens de Honra',
    'Interstellar',
    'Atividade Paranormal',
    'Minha mãe é uma peça',
    'Click',
    'Batman Begins',
    'A Rede Social',
    'Náufrago',
    'Senhor dos Anéis',
    'Harry Potter',
    'Pulp Fiction',
    'Cidadão Kane',
    'E o vento levou',
    'Kill Bill',
    'Top Gun',
    'Clube da Luta',
    'Tropa de Elite',
    'Cidade de Deus'
];

const adicionando = filmes.push("Tá chovendo hamburguer"); // adiciona no final
const filmeRemovido = filmes.pop(); //remove o último
const tamanhoVetor = filmes.unshift("De Volta para o Futuro"); // adiciona no começo
const retirandoPrimeiro = filmes.shift() // remove o começo
delete filmes[1]; // apaga, mas deixa a posição vazia, "pula" o index

filmes.splice(13, 3); // coloca o indice inicial e após a virgula quantos quer remover, (ex: removera o filme[13], filmes[14], filme[15])
filmes.splice (9, 1, "Batman o Cavaleiro das Trevas"); // após o index 9, coloca a novo argumento
filmes.splice (10, 2, "Constantine", "Van Helsing", "Padre"); // remove os 2 após o 10, e insire os 3 novos
filmes.splice(6, 0, "Esposa de Mentirinha", "Como se Fosse a Primeira Vez", "Zohan") // coloca os filmes na primeira posição indicada

console.log(filmes);