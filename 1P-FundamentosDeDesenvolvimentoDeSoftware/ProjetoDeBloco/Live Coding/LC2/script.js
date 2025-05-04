let resposta;
const numeroSorteado = Math.ceil(Math.random() * (200 - 100) + 100);
alert("O número sorteado foi " + numeroSorteado);

if (numeroSorteado % 2 == 0) {
	if (numeroSorteado > 150){
		resposta = "O número sorteado é par e maior que 150";
	} else {
		resposta = "O número sorteador é par mas não é maior que 150";
	}
} else {
	if (numeroSorteado % 5 == 0){
		resposta = "O número sorteado é ímpar e múltiplo de 5";
	} else {
		resposta = "O número sorteado é ímpar mas não é múltiplo de 5";
	}
}

alert(resposta);