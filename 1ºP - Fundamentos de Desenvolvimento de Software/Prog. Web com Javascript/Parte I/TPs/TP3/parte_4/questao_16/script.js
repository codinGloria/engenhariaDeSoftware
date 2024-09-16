let passo = Number(prompt("Digite o número do passo que deseja ver (1-10):"));

switch (passo) {
    case 1:
        alert("Passo 1: Escolha os grãos de café.");
    case 2:
        alert("Passo 2: Torre os grãos de café na máquina.");
    case 3:
        alert("Passo 3: Moa os grãos de café.");
    case 4:
        alert("Passo 4: Ferva a água.");
    case 5:
        alert("Passo 5: Coloque o café moído no filtro.");
    case 6:
        alert("Passo 6: Despeje a água quente sobre o café no filtro.");
    case 7:
        alert("Passo 7: Aguarde a filtragem.");
    case 8:
        alert("Passo 8: Sirva o café.");
    case 9:
        alert("Passo 9: Adoce ou adicione leite a gosto.");
    case 10:
        alert("Passo 10: Aproveite seu café!");
        break;
    default:
        alert("Passo inválido. Digite um número de 1 a 10.");
}
