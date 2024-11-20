let quantidade = Number(prompt("Quantos números deseja sortear?"));

if (isNaN(quantidade) || quantidade <= 0) {
  alert("Insira um número válido maior que 0.");
} else {
  console.log("Números sorteados:");
  for (let i = 0; i < quantidade; i++) {
    let numeroSorteado = Math.ceil(Math.random() * 60);
    console.log(numeroSorteado);
  }
}
