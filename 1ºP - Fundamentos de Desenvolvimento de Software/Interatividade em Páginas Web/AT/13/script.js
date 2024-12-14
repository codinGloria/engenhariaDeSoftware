const inputNumero = document.getElementById("numero");
const inputMensagem = document.getElementById("mensagem");
const botaoEnviar = document.getElementById("enviar");

botaoEnviar.addEventListener("click", () => {
  const numero = inputNumero.value;
  const mensagem = inputMensagem.value;

  if (numero && mensagem) {
    const url = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(url, "_blank");
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});
