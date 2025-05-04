let advogado = {
  nome: "João",
  horasTrabalhadas: 40,
  valorHora: 100,
  calcularGanho: function () {
    return this.horasTrabalhadas * this.valorHora;
  },
};

console.log(
  "O advogado ganha R$" + advogado.calcularGanho().toFixed(2) + " por mês."
);
