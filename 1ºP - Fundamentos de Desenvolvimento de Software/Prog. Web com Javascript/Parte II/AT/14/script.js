class InvalidCPFError extends Error {}

let cpf = prompt("Digite seu CPF:");

function validarCPF(cpf) {
  return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}

if (!validarCPF(cpf)) {
  throw new InvalidCPFError("CPF inválido!");
} else {
  console.log("CPF válido!");
}
