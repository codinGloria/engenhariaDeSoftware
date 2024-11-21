function redirecionar() {
  // Exibindo o alerta
  alert("Você será redirecionado");

  // Redirecionando para uma nova página
  window.location.href = "https://exemplo.com";
}

document
  .getElementById("btnRedirecionar")
  .addEventListener("click", redirecionar);
