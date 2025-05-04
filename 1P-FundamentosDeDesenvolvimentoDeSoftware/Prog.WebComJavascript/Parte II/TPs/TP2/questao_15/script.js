let incremento = Number(prompt("Digite o valor do incremento (entre 1 e 10):"));

if (isNaN(incremento) || incremento < 1 || incremento > 10) {
  alert("Por favor, insira um número válido entre 1 e 10.");
} else {
  console.log("Contagem:");
  for (let contador = 0; contador <= 50; contador += incremento) {
    console.log(contador);
  }
}
