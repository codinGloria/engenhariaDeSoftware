const pesos = [82.4, 104.6, 68.8, 20.6, 34.2];

const pesoInvertido = [...pesos].reverse();
console.log("Pesos invertidos: ", pesoInvertido);

const ordemCrescente = [...pesos].sort((a, b) => a - b);
console.log("Em ordem crescente:", ordemCrescente);
