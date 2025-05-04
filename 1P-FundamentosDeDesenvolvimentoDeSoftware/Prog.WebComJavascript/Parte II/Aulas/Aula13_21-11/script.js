/* FUNÇÕES */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Map
/* Ex: Dobrar - usando FOR
let dobros = [];
for (const numero of numeros) {
    dobros.push(numero * 2);
}; */
const dobros = numeros.map((n) => n * 2);
console.log("Dobros: " + dobros);

const letras = ["a", "b", "c", "d", "e"];
const maiusculas = letras.map((letra) => letra.toUpperCase());
console.log("Maiusculas: " + maiusculas);

// 2. Filter
/* Ex: Selecionar pares - usando FOR
let pares = [];
for (const numero of numeros) {
    if (numero % 2 === 0) {
        pares.push(numero);
    }
};*/
const pares = numeros.filter((n) => n % 2 === 0);
console.log("Pares: " + pares);

const personagensAnime = [
    "Eren Yeager",
    "Izuku Midoriya",
    "Naruto Uzumaki",
    "Monkey D. Luffy",
    "Goku",
    "Edward Elric",
    "Light Yagami",
    "Hori Kyoko",
    "Narumi Momose",
    "Hyakkimaru",
    "Mafuyu Sato",
    "Meiko Honma (Menma)",
    "Violet Evergarden",
    "Shoyo Hinata",
    "Yuji Itadori",
    "Denji",
    "Mai Sakurajima",
    "Saitama",
    "Tanjiro Kamado",
    "Zero Two"
];

const personagensSelecionados = personagensAnime.filter(
    (personagem) => personagem.length < 10
);
console.log("Personagens selecionados: " + personagensSelecionados);

// 3. Reduce
/* Ex: Somatório - usando FOR
let somatorio = 0;
for (const numero of numeros) {
    somatorio += numero;
};*/
const somatorio = numeros.reduce((s, i) => s + i, 0);
console.log("Somatorio: " + somatorio);

const tuplas = [
    ["um", 1],
    ["dois", 2],
    ["tres", 3],
    ["quatro", 4],
    ["cinco", 5],
    ["seis", 6],
    ["sete", 7],
    ["oito", 8],
    ["nove", 9],
    ["dez", 10]
];

const obj = tuplas.reduce((objAtual, tupla) => {
    const extenso = tupla[0];
    const numero = tupla[1];
    objAtual[extenso] = numero;
    return objAtual;
}, {});

console.log(obj);

// UTILIZANDO VARIAS FUNÇÕES JUNTAS
const resultado = numeros
    .filter((numero) => numero % 2 === 0)
    .map((n) => n * 2)
    .reduce((s, i) => s + i, 0);

console.log("Resultado: " + resultado);

// 4. Flat 
const matriz = [[1, 2], [3, 4, [5]], [6, 7, 8], 9];
const flat = matriz.flat(2); // o numero depende da profundidade, mas tbm pode ser adicionado o Infinity, que independe desta quantidade de profundidade
console.log(flat);