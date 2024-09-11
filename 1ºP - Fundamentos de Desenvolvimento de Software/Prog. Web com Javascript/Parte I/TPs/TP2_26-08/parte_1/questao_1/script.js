const dinheiroQueRecebi = Number(prompt("Quanto você entregou?"));
const valorDoProduto = Number(prompt("Qual o valor do produto?"));

let troco = dinheiroQueRecebi - valorDoProduto;

console.log("Troco: " + troco.toFixed(2));
console.log("Troco arredondado pra cima: " + Math.ceil(troco));
console.log("Troco arredondado pra baixo: " + Math.floor(troco));