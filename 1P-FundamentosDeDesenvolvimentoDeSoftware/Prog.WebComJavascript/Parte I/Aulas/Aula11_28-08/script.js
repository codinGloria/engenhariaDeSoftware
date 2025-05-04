// aprendendo Switch Case

let numeroPorExtenso = prompt("Digite um número por extenso (0-4)");

switch (numeroPorExtenso){
    case 'zero':
        alert("O número é 0.");
        break;
    case 'um':
        alert("O número é 1.");
        break;
    case 'dois':
        alert("O número é 2.");
        break;
    case 'três':
        alert("O número é 3.");
        break;
    case 'quatro':
        alert("O número é 4.");
        break;
    default:
        alert("Não é um número válido.")
}