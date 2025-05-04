const nomeColegio = "E.E. Profª Geralda Magela Leão de Melo";
const anoFundacaoColegio = 2004;

let colegio = {
  nome: nomeColegio,
  anoFundacao: anoFundacaoColegio,
};

colegio.nomeDiretor = "Paula";
colegio.numeroAlunos = 488;
colegio.telefone = "4002-8922";

colegio.obterDiretor = function () {
  console.log("Diretor do colégio: ", this.nomeDiretor);
};

colegio.obterDiretor();
