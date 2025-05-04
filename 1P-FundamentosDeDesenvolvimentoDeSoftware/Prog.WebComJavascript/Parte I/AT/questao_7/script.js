const numeroCentro = Number(prompt("Digite o número centro:"));
const distancia = Number(prompt("Digite a distancia:"));

let minimo = numeroCentro - distancia;
let maximo = numeroCentro + distancia;

let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

console.log("Número aleatório gerado:", numeroAleatorio);