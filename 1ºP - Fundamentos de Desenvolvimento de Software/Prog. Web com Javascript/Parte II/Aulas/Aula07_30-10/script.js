/* ********** EXEMPLO 01 - 2 WHILES ********** 
let numerosA = [1, 2, 3, 4, 5];
let numerosB = [6, 7, 8, 9];

let dobrosA = [];
let triplosB = [];

let indiceA = 0;
let indiceB = 0;

while (indiceA < numerosA.length){
    dobrosA.push(numerosA[indiceA] * 2);
    indiceA++;
}

while (indiceB < numerosB.length){
    triplosB.push(numerosB[indiceB] * 3);
    indiceB++;
}

console.log(dobrosA);
console.log(triplosB);
*/

/* ********** EXEMPLO 01 - FOR ********** 
// declaração; condição; expressão

for (let i = 0; i < numerosA.length; i++) {
    dobrosA.push(numerosA[i] * 2);
}

for (let i = 0; i < numerosB.length; i++) {
    triplosB.push(numerosB[i] * 3);
}

console.log(dobrosA);
console.log(triplosB);
*/

/* ********** EXEMPLO 02 - FOR ********** 
let nome = "";

for (;nome.length < 1;){
    nome = prompt("Digite seu nome:");
};

alert("Olá, " + nome + "!");
*/

/* ********** EXEMPLO 03 - WHILE ********** 
let texto = prompt("Digite qualquer coisa:");
let textoInvertido = "";

while(texto.length !== textoInvertido.length){
    let indice = texto.length - textoInvertido.length - 1;
    textoInvertido += texto[indice];
}

console.log(textoInvertido);
*/

/* ********** EXEMPLO 03 - FOR ********** */
let texto = prompt("Digite qualquer coisa:");
let textoInvertido = "";

for (let i = texto.length - 1; i >= 0; i--){
    textoInvertido += texto[i];
}

console.log(textoInvertido);