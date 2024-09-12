// Funções

/* 
O que a função faz
quais são os parâmetros
e o que ela retorna

// assinatura de função

            //   RECEBE   ||   RETORNA 
alert       // string     => void
prompt      // string     => string
Math.random // ()         => number
Number      // any        => number
Math.round  // number     => number
console.log // any        => void

*/

function mostraTexto(){ // assinatura: () => void
    alert("Lorem ipsum dolor sit amet. Et quae consequatur et minima quia hic molestiae iusto aut corrupti quia. Sed dicta ratione aut veritatis dolorum sed rerum voluptate ex quibusdam rerum et consequatur ipsum in repudiandae voluptas. Quo modi nihil quo voluptas optio vel officiis dicta et porro delectus?");
}

mostraTexto();
mostraTexto();
mostraTexto();

function soma(){
    const numA = Number(prompt("Digite o número A"));
    const numB = Number(prompt("Digite o número B"));
    const resultado = numA + numB;
    alert(resultado);
}

function soma(numA, numB){
    const resultado = numA + numB;
    alert(resultado);
}

const a = 2;
const b = 8;

soma (a, b);
soma (6, a + 4);

const outroA = Number(prompt("Digite o número A"));
const outroB = Number(prompt("Digite o número B"));

soma(outroA, outroB);