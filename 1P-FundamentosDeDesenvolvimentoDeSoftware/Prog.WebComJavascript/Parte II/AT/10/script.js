let frase = "Nesse momento, o BitCoin está em R$ 530.085,52. Loucura, né?";

let precoBruto = frase.match(/\d+\.\d+,\d+/)[0];
let precoFormatado = +precoBruto.replace(".", "").replace(",", ".");

let dividido = (precoFormatado / 3).toFixed(2);

console.log(dividido);
