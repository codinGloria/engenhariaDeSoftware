function horasParaSegundos(nHoras){
    const segundosPorHora = 3600;
    return nHoras * segundosPorHora;
}

let resposta = Number(prompt("Quantas horas quer saber em segundos?"));
console.log(horasParaSegundos(resposta));