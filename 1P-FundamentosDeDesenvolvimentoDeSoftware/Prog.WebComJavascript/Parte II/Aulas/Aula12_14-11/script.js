/* Escopo Global
const nome = 'Glória';
// depois de ser declarada pode ser acessada em qualquer lugar
console.log(nome);
*/

/* Escopo de Bloco
{
    console.log("Isso é um bloco");
    const sobrenome = "Braz"
    // variaveis declaradas no bloco só são acessadas dentro dele
    // apenas tipos: const e let
}

console.log(sobrenome); // não funciona
*/

/* Escopo de Função 
function mostraNome(){
    var nome = 'Glória';
    console.log(nome);
    // as coisas só existem após a função ser executada
}

console.log(nome); // será indefinido, porque o var respeita o escopo de função
mostraNome();
*/

/* Funções Recursivas 
Uma função que invoca a si mesma

let profundidade = 0;

function souRecursivo(){
    profundidade++;
    console.log(profundidade);
    souRecursivo();
}

souRecursivo();
*/


const numeros = [1,2,3,4,5];

/* EXEMPLO USANDO FOR
let somatorio = 0;
for (const numero of numeros){
    somatorio += numero;
}

console.log(somatorio);
*/

/* EXEMPLO USANDO FUNÇÃO RECURSIVA
function somaSomatorio(numeros, somaAcumulada){
    if(numeros.length > 0){
        const proximaSoma = somaAcumulada + numeros[0];
        numeros.shift();
        return somaSomatorio(numeros, proximaSoma);
    }

    return somaAcumulada;
}

const somatorio = somaSomatorio(numeros, 0);
console.log(somatorio);
*/

function fibonacci (ate, seq = [1, 1]){
    if (seq.length < ate){
        const proxSeq = seq.concat(seq.at(-1) + seq.at(-2));
        return fibonacci(ate, proxSeq)
    }

    return seq;
}

const seq = fibonacci(20000);
console.log(seq);