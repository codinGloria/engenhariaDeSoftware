let incremento = Number(prompt("Digite o valor do incremento (entre 1 e 10):"));

if (isNaN(incremento) || incremento < 1 || incremento > 10) {
  alert("Por favor, insira um número válido entre 1 e 10.");
} else {
  let contador = 0;

  while (true) {
    console.log(`Contador: ${contador}`);
    let continuar = prompt(
      "Deseja continuar incrementando o contador? (Sim ou Não)"
    ).toLowerCase();

    if (continuar === "não") {
      alert(`O valor final do contador é: ${contador}`);
      break;
    } else if (continuar === "sim") {
      contador += incremento;
    } else {
      alert("Resposta inválida. Por favor, digite 'Sim' ou 'Não'.");
    }
  }
}
