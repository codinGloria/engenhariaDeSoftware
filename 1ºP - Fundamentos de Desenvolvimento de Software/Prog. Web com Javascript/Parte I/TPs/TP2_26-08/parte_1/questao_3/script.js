const numeroA = Math.ceil(Number(prompt("Insira um número inteiro:")));
const numeroB = Math.ceil(Number(prompt("Insira outro número inteiro:")));

let potenciaA = numeroA ** 2;
let potenciaB = numeroB ** 3;

let raizQuadrada = Math.sqrt(potenciaA + potenciaB);

alert("A raiz quadrada é igual a " + raizQuadrada);