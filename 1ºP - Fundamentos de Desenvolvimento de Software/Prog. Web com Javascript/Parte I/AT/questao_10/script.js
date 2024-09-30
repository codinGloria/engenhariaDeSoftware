const idade = Number(prompt("Quantos anos vc tem?"));
let isPremium = prompt("Você é premium? (Sim/Não)").toLowerCase();

if (isPremium === "sim"){
    isPremium = true;
} else if (isPremium === "não") {
    isPremium = false;
} else if (isPremium === "nao") {
    isPremium = false;
} else {
    console.log("Resposta Inválida.")
}

if (idade >= 21 && isPremium){
    console.log("Acesso concedido.");
} else {
    console.log("Acesso negado.");
}

let isAcessoConcedido = (idade >= 21 && isPremium) ? true : false;
console.log("Acesso concedido:", isAcessoConcedido);