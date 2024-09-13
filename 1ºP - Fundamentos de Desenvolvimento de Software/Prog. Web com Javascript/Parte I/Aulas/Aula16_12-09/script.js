// ********* EXEMPLO DE FUNÇÃO 

function descobreParOuImpar(num){
    if(num % 2 > 0){
        return "ímpar";
    } else {
        return "par";
    }
}

const numero = Number(prompt("Digite um número:"));
const parOuImpar = descobreParOuImpar(numero);

alert("O número digitado é " + parOuImpar);


// ******** EXEMPLO DE FUNÇÃO COM RETORNO **********
function juntaNomeSobrenome(nome, sobrenome) {
    const nomeCompleto = nome + " " + sobrenome;
    return nomeCompleto;
}

function mostraNomeCompleto(nomeCompleto) {
    alert("Seja bem vinde, " + nomeCompleto + "!");
}

const meuNome = prompt("Digite o seu nome");
const meuSobrenome = prompt("Digite o seu sobrenome");

const meuNomeCompleto = juntaNomeSobrenome(meuNome, meuSobrenome);

mostraNomeCompleto(meuNomeCompleto);

// ********** EXEMPLO DE FUNÇÃO COM IF ELSE **********
function juntaNomeSobrenome2(nome, sobrenome) {
    if (!nome) {
        return "É necessário informar o nome";
    } else if (!sobrenome) {
        return "É necessário informar o sobrenome";
    }

    const nomeCompleto2 = nome + " " + sobrenome;
    return nomeCompleto2;
}

const nomeCompleto2 = juntaNomeSobrenome2( null , "");
alert(nomeCompleto2);