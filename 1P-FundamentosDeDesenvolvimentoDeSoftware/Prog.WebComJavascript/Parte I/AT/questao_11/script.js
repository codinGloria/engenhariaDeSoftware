let valorDoProduto = Number(prompt("Digite o valor do produto:"));
let isPromocao = prompt("O produto está em promoção?").toLowerCase() === "sim";

let categoria;

if (valorDoProduto < 200 && !isPromocao) {
    categoria = "Barato";
} else if (valorDoProduto >= 200 && valorDoProduto <= 3000 && isPromocao) {
    categoria = "Moderado";
} else if (valorDoProduto > 3000) {
    categoria = "Caro";
}

alert("A categoria do produto é: " + categoria);
