class InvalidCPFError extends Error {}

function validarCPF(cpf) {
  return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}

try {
  let cpf = prompt("Digite seu CPF:");

  if (!validarCPF(cpf)) {
    throw new InvalidCPFError("CPF inválido!");
  }

  console.log("CPF Válido");
} catch (error) {
  console.log("CPF Inválido");
}
