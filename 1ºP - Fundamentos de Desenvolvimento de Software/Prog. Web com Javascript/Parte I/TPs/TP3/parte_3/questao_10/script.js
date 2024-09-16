function wordToNumber(num) {
    num = num.toLowerCase();

    switch (num) {
        case "zero":
            return "0";
        case "um":
            return "1";
        case "dois":
            return "2";
        case "tres":
            return "3";
        case "quatro":
            return "4";
        case "cinco":
            return "5";
        case "seis":
            return "6";
        case "sete":
            return "7";
        case "oito":
            return "8";
        case "nove":
            return "9";
        default:
            return "Número desconhecido";
    }
}

let num = prompt("Escreva por extenso um número de 0-9:");
let algarismo = wordToNumber(num);
console.log(algarismo);
