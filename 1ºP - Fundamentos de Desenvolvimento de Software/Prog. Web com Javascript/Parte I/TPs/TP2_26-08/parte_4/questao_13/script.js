let valorTotal = Number(prompt("Insira o valor total da compra:"));
let formaPagamento = Number(prompt("Agora, selecione a forma de pagamento: \n(1) À vista no dinheiro \n(2) À vista no débito \n(3) À vista no crédito \n(4) À prazo até 3x \n(5) À prazo acima de 3x"));

let valorAPagar = 0;

if (formaPagamento == 1){
    valorAPagar = valorTotal - (valorTotal * 0.1);
    alert("Deve pagar R$" + valorAPagar.toFixed(2));
} else if (formaPagamento == 2){
    valorAPagar = valorTotal - (valorTotal * 0.08);
    alert("Deve pagar R$" + valorAPagar.toFixed(2));
} else if (formaPagamento == 3){
    valorAPagar = valorTotal - (valorTotal * 0.05);
    alert("Deve pagar R$" + valorAPagar.toFixed(2));
} else if (formaPagamento == 4){
    valorAPagar = valorTotal / 3;
    alert("Você pagará 3x de R$" + valorAPagar.toFixed(2));
} else if (formaPagamento == 5){
    valorAPagar = valorTotal + (valorTotal * 0.04);
    alert("O produto ficará em R$" + valorAPagar.toFixed(2));
    valorAPagar /= 6;
    alert("Simulando 6 parcelas, terão o valor de R$" +  valorAPagar.toFixed(2));
} else {
    alert("Opção inválida :/");
}