let numeroInicio = Math.floor(Number(prompt("Insira o inicio do intervalo:")));
let numeroFim = Math.floor(Number(prompt("Insira o fim do intervalo:")));

let aleatorio = Math.floor(Math.random() * (numeroFim - numeroInicio + 1)) + numeroInicio;

console.log(aleatorio);