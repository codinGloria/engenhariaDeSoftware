// operador condicional ternário

const resposta = prompt("Qual é a resposta para tudo?");
let ehUsuarioSabeAResposta = (resposta === "42") ? "Sim" : "Não";
alert(ehUsuarioSabeAResposta);

const numero = +prompt("Digite um número");
let parOuImpar = (numero % 2 === 0) ? "Par" : "Impar";
alert(parOuImpar);