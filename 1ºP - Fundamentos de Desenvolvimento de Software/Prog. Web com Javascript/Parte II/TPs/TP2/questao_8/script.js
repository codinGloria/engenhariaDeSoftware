const algunsCarros = [
  ["Kwid", "Renault"],
  ["Polo", "Volkswagen"],
  ["S10", "Chevrolet"],
  ["March", "Nissan"],
  ["Civic", "Honda"],
  ["Tracker", "Chevrolet"],
  ["T-Cross", "Volkswagen"],
  ["Gol", "Volkswagen"],
  ["Duster", "Renault"],
  ["Onix", "Chevrolet"],
  ["Argo", "Fiat"],
  ["Kicks", "Nissan"],
  ["Fit", "Honda"],
  ["Fiorino", "Fiat"],
  ["Cronos", "Fiat"],
  ["Sandero", "Renault"],
  ["Versa", "Nissan"],
  ["HR-V", "Honda"],
  ["Virtus", "Volkswagen"],
  ["Uno", "Fiat"],
];

const contagemCarros = {};

for (const [, marca] of algunsCarros) {
  contagemCarros[marca] = (contagemCarros[marca] || 0) + 1;
}

let mensagem = "Quantidade de carros por marca:\n";
for (const [marca, quantidade] of Object.entries(contagemCarros)) {
  mensagem += `${marca} - ${quantidade} carros\n`;
}
alert(mensagem);
