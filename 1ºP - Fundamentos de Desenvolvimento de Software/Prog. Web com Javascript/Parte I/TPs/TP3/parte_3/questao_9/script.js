function parOuImpar(num){
    let resposta = "";
    if (num % 2 == 0){
        resposta = "par";
    } else {
        resposta = "impar";
    }
    console.log(resposta);
}

let numero = Number(prompt("Digite um número: "));
parOuImpar(numero);
