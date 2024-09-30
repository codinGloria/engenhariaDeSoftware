let anoAtual = Number(prompt("Digite o ano atual:"));
let mesAtual = Number(prompt("Digite o mês atual (1-12):"));
let idade = Number(prompt("Digite sua idade:"));
let mesesAteAniversario = Number(prompt("Quantos meses faltam para seu aniversário? Use número negativo se já passou."));

let anoNascimento = anoAtual - idade;

let mesNascimento;

if (mesesAteAniversario < 0) {
    mesNascimento = mesAtual + mesesAteAniversario;
} else {
    mesNascimento = mesAtual + mesesAteAniversario;
    if (mesNascimento > 12) {
        mesNascimento = mesNascimento - 12;
    }
}

alert("O ano de nascimento é " + anoNascimento + " e o mês de nascimento é " + mesNascimento);
