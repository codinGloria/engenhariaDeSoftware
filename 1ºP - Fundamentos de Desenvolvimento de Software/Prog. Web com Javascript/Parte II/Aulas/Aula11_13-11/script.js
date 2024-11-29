/* ********** Funções ********** */

/* Função plana nomeada */
function soma(a, b) {
    const resultado = a + b;
    return resultado;
};

/* Função anônima */
const subtracao = function (a, b) {
    const resultado = a - b;
    return resultado;
};

/* Arrow Function (SÃO ANONIMAS) */
const multiplicacao = (a, b) => {
    const resultado = a * b;
    return resultado;
}

/* Arrow Function (sem escopo) */
const divisao = (a, b) => a / b; // return implícito

const resultadoSoma = soma(1, 2); // 3
const resultadoSubtracao = subtracao(4, 2); // 2

console.log(resultadoSoma, resultadoSubtracao);

/* EXEMPLOS INVERTENDO STRINGS */
// Função normal
function inverteStringFor(str){
    let strInvertida = "";
    for (let i = str.length - 1; i >= 0; i--){
        strInvertida += str[i]
    }

    return strInvertida;
}

// arrow function
const inverteStringArrow = (str) => {
    let strInvertida = "";
    for (let i = str.length - 1; i >= 0; i--){
        strInvertida += str[i]
    }
    return strInvertida;
}

// arrow function em uma linha só
const inverteString = (str) => str.split("").reverse().join("");

const doritosInvertido = inverteStringFor("doritos");
const doritosInvertido2 = inverteString("doritos");
const doritosInvertido3 = inverteStringArrow("doritos");
console.log(doritosInvertido, doritosInvertido2, doritosInvertido3);

/* EXEMPLO 02*/
function executaFuncao(fn){
    fn();
}

function hello(){
    alert("Hello");
}

executaFuncao(hello)

/* EXEMPLO 03 */
function executaOpMatematica (a, b, opMatematica){
    const resultado = opMatematica(a, b);
    return resultado;
}

console.log(executaOpMatematica (4, 2, soma));
// passando uma função como parametro:
console.log(executaOpMatematica(8, 2, (a,b) => (a + b) / 2))

/* FOR EACH */
const numeros = [1,2,3,4,5,6];
let somatorio = 0;

numeros.forEach((numero) => {
    somatorio += numero;
});

console.log(somatorio);