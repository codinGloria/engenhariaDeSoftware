/* Tipos primitivos no JS

textos -> string
numeros -> number
verdadeiro/falso -> booleanos
null
undefined
*/

// manipulação de Strings
const textos = 'Não existe limitação de tamanho por aqui :]';
const nomeCompleto = 'Lívia Faria Braz';
const nomeCompletoMaiusculas = nomeCompleto.toUpperCase();
alert(nomeCompletoMaiusculas);

// manipulação de Numbers
const renda = 50000.12345;
alert(renda.toFixed(2)); // deixa o numero com 2 após a virgula

// conhecendo booleanos (comumente usados em condições)
const gostaDeGatos = true;

// null
const dinheiroNaConta = null;
// O zero é quando não tem NADA
// O null é quando o "objeto" DEIXA DE EXISTIR
// O undefined é quando esse objeto ainda NÃO FOI DEFINIDO
