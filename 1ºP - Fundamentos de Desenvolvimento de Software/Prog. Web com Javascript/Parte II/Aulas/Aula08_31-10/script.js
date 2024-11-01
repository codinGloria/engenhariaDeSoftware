/* ********** FOR IN  ********** 
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let dobros = [];

for (let i in numeros){
    dobros.push(numeros[i] * 2);
}

console.log(dobros);
*/

/* ********** FOR OF ********** 

for (let numero of numeros){
    dobros.push(numeros * 2);
}

console.log(dobros);
*/ 


/* ********** Exemplo 01 - FOR IN **********
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let somas = [];

for (let i in numeros){
    const numeroAtual = numeros[i];
    const numeroAnterior = i === "0" ? 0 : numeros[i - 1];

    const soma = numeroAtual + numeroAnterior;
    somas.push(soma);
};

console.log(somas);
 */

/* ********** Exemplo 02 - FOR IN **********
for (let i in numeros){
    i = Number(i);
    const ultimoIndice = numeros.length - 1;
    const numeroAtual = numeros[i];
    const numeroAntecessor = i === 0 ? 0 : numeros[i - 1];
    const numeroSucessor = i === ultimoIndice ? 0 : numeros[i];
    const soma = numeroAntecessor + numeroAtual + numeroSucessor;
    somas.push(soma);
}

console.log(somas);
*/

/* ********** Exemplo 02 - FOR IN e FOR OF ********** */
const quantosAleatorios = Number(
    prompt("Quantos números aleatórios você quer gerar?")
  );
  
  const maxNumero = Number(prompt("Você quer gerar números de 0 até quanto?"));
  
  let aleatorios = [];
  
  for (let indice = 0; indice < quantosAleatorios; indice++) {
    const numeroAleatorio = geraAleatorio();
    aleatorios.push(numeroAleatorio);
  }
  
  let tentativas = [];
  
  for (let indice in aleatorios) {
    indice = Number(indice);
    const aleatorio = aleatorios[indice];
    let quantChutes = 0;
    let chute;
    let posicao = indice + 1;
  
    alert("Chute o " + posicao + "º número aleatório!");
  
    while (true) {
      chute = Number(prompt("Chute um número entre 0 e " + maxNumero + "!"));
      if (chute >= 0 && chute <= maxNumero) {
        quantChutes++;
      } else {
        alert("Erro: você precisa digitar números entre 0 e " + maxNumero + "!");
      }
  
      if (chute === aleatorio) {
        alert("Acertou em " + quantChutes + " chutes!");
        break;
      } else {
        alert("Errou! " + quantChutes + " tentativas");
      }
    }
  
    tentativas.push(quantChutes);
  }
  
  function geraAleatorio() {
    return Math.round(Math.random() * maxNumero);
  }
  
  console.log(aleatorios);
  console.log(tentativas);
  
  let somatorioTentativas = 0;
  
  for (let tentativa of tentativas) {
    somatorioTentativas += tentativa;
  }
  
  let mediaTentativas = somatorioTentativas / tentativas.length;
  
  alert(
    "Finalizado! Com uma média de " + mediaTentativas.toFixed(1) + " tentativas"
  );
  