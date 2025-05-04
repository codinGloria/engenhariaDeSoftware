let listaDeCompras = [];
let total = 0;

do {
  let nome = prompt("Digite o nome do produto:");

  if (!nome) break;

  let preco = Number(prompt("Digite o preço de " + nome));
  if (isNaN(preco) || preco < 0) {
    alert("Preço inválido, insira um valor númerico válido.");
    continue;
  }

  listaDeCompras.push({ nome, preco });
  total += preco;
} while (true);

let mensagem = "Lista de compras:\n\n";
for (const produto of listaDeCompras) {
  mensagem += `${produto.nome} | R$${produto.preco.toFixed(2)}\n`;
}

mensagem += `--------------------\nTotal: R$${total.toFixed(2)}`;

alert(mensagem);
