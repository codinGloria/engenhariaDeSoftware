/* ********** EXEMPLO 01 ********** */
let numero = 0;
let iteracoes = 0;

while (numero < 3){
    numero += Math.random();
    iteracoes++;
}

console.log("O número final é: " + numero);
console.log("Foram necessárias " + iteracoes + " iterações.");


/* ********** EXEMPLO 02 ********** */
let salarios = [ 1600, 2400, 5000, 12000, 1700, 1800, 2000];
let indice = 0;

while(indice < salarios.length){
    salarios[indice] *= 2;
    indice++;
}

console.log(salarios);  


/* ********** EXEMPLO 03 ********** */
let idsFuncionarios = [1020, 33, 57, 101, 200, 1034, 542, 333, 666];
let funcionariosQueNaoForamDemitidos = [];
let indice1 = 0;

while (indice1 < idsFuncionarios.length){
    const idAtual = idsFuncionarios[indice1];
    const isImpar = idAtual % 2 > 0;
    if (isImpar){
        funcionariosQueNaoForamDemitidos.push(idAtual);
    }
    indice1++;
}

console.log(funcionariosQueNaoForamDemitidos);


/* ********** EXEMPLO 04 ********** */
// "eu amo doritos" -> "eU AmO DoRiToS"
let frase = "eu amo doritos";
let indice2 = 0;
let fraseMiguxes = "";

while (indice2 < frase.length){
    const charAtual = frase[indice2];
    const isCharImpar = indice2 % 2 > 0;
    if(isCharImpar){
        fraseMiguxes += charAtual.toUpperCase();
    } else {
        fraseMiguxes += charAtual;
    }
    indice2++;
}

console.log(fraseMiguxes);