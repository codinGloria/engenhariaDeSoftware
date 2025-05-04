let raioInformado = Number(prompt("Informe o raio de um círculo"));

let circulo = {
  raio: raioInformado,
  circunferencia: function () {
    return Math.PI * this.raio * 2;
  },
  area: function () {
    return Math.PI * Math.pow(this.raio, 2);
  },
};

alert("Circunferencia: " + circulo.circunferencia().toFixed(2));
alert("Área: " + circulo.area().toFixed(2));
