function validarCPF(cpf) {
  return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}

console.log(validarCPF("123.456.789-09")); // valido
console.log(validarCPF("12345678909")); // invalido
console.log(validarCPF("123.abc.789-09")); // invalido
