function imprimeRetangulo(largura, altura) {
    const linha = "*".repeat(largura);
    
    for (let i = 0; i < altura; i++) {
        console.log(linha);
    }
}

const largura = prompt("Digite a altura do retangulo");
const altura = prompt("Digite a largura do retangulo");
alert(imprimeRetangulo(largura, altura));