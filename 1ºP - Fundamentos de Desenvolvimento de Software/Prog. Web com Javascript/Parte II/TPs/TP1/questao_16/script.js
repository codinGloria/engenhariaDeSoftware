let maiorSalario = 0;
let nomeMaiorSalario = "";

while (true) {
  let nome = prompt("Digite o nome da pessoa:");
  let salario = Number(prompt("Digite o salário da pessoa:"));

  if (salario > maiorSalario) {
    maiorSalario = salario;
    nomeMaiorSalario = nome;
  }

  let continuar = prompt("Deseja continuar? (s/n)");
  if (continuar.toLowerCase() !== "s") break;
}

alert(
  "O maior salário é de " +
    nomeMaiorSalario +
    "\nNo valor de R$" +
    maiorSalario.toFixed(2)
);
