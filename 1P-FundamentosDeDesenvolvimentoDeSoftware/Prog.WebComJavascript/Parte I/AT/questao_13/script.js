function reaisParaCentavos(valor) {
    return valor * 100;
}

const reais = Number(prompt("Quantos reais quer converter?"));
console.log(reaisParaCentavos(reais));