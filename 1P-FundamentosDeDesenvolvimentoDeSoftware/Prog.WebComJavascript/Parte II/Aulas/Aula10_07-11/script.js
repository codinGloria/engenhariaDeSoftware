/* ********** BUBBLE SORT ********** 

let numeros = [ 4, 2, 1, 5, 3];
let isAlterado;

// 1) Iterar individualmente cada número de um vetor
// 2) Pegar as "duplinhas"
// 3) Saber quando trocar de posição
// 4) Implementar a troca de posição
// 5) Implementar a lógica para repetir as passadas
// 6) Saber a hora de parar

do {
    isAlterado = false;
    for (let i = 0; i < numeros.length -1; i++){
        const numeroAtual = numeros[i];
        const proximoNumero = numeros[i+1];
        console.log(numeroAtual, proximoNumero);
    
        if (proximoNumero < numeroAtual){
            numeros.splice(i, 2, proximoNumero, numeroAtual);
            isAlterado = true;
        }
    }
} while (isAlterado);

console.log(numeros);
*/

/* ********** JOGO DA FORCA **********  */
const palavras = [
    "abacate", "banana", "carro", "dado", "elefante", "flor", "gato", "hotel", "igreja", "jardim",
    "kilo", "limonada", "manga", "navio", "ovo", "peixe", "queijo", "roda", "sapato", "tigre",
    "urso", "vaca", "xadrez", "zebra", "areia", "bala", "casa", "dedo", "estrela", "foca",
    "goiaba", "hora", "ilha", "jarra", "kiwi", "luz", "mesa", "nuvem", "olho", "porta",
    "quadro", "rosa", "sol", "treno", "uva", "vela", "xale", "zangao", "amigo", "bola",
    "caneca", "dente", "escada", "fundo", "gol", "helice", "imagem", "janela", "ketchup", "lago",
    "moto", "noite", "oceano", "parque", "queimado", "relva", "sola", "tapete", "unha", "venda",
    "xarope", "zero", "andar", "brisa", "caderno", "desejo", "esquilo", "fato", "golfinho", "hiena",
    "idade", "jogo", "kimono", "leao", "macaco", "noiva", "orvalho", "pato", "quadrado", "rio",
    "sombra", "tempestade", "urso", "verao", "xampu", "zangado"
];

const palavra = palavras[Math.floor(Math.random() * palavras.length)];
let palavraOculta = "_".repeat(palavra.length);

const errosPermitidos = 4;
let erros = 0;

let isGanhou = "";
let isGameOver = "";

while (true) {
    const letra = prompt(palavraOculta + "\nDigite uma letra:");

    if(palavra.includes(letra)){
        let nextPalavraOculta = palavraOculta.split('');
        for (const i in palavra){
            if(palavra[i] === letra){
                nextPalavraOculta[i] = letra;
            }
        }
        palavraOculta = nextPalavraOculta.join("");
    } else {
        erros++;
        alert("Errado! Erros: " + erros + "/" + errosPermitidos);
    }
    const isGanhou = palavraOculta === palavra;
    const isGameOver = erros >= errosPermitidos;

    if (isGanhou) {
        alert("Parabéns! Você venceu! A palavra é: " + palavra + 
            "\nErros: " + erros);
        break;
    } else if (isGameOver) {
        alert("Você perdeu :/ \nA palavra era: " + palavra);
        break;
    }
    
}