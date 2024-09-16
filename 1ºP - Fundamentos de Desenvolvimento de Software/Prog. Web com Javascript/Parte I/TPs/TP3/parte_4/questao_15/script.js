let votosRoboRat = Number(prompt("Quantos votos RoboRat recebeu?"));
let votosSuperKeyboard = Number(prompt("Quantos votos SuperKeyboard recebeu?"));
let votosInvalidos = Number(prompt("Quantos votos inválidos houveram?"));

let totalVotos = votosRoboRat + votosSuperKeyboard + votosInvalidos;
let votosValidos = votosRoboRat + votosSuperKeyboard;

let porcentagemRoboRat = (votosRoboRat / totalVotos) * 100;
let porcentagemSuperKeyboard = (votosSuperKeyboard / totalVotos) * 100;
let porcentagemInvalidos = (votosInvalidos / totalVotos) * 100;

let porcentagemRoboRatValidos = (votosRoboRat / votosValidos) * 100;
let porcentagemSuperKeyboardValidos = (votosSuperKeyboard / votosValidos) * 100;

alert("Porcentagem RoboRat: " + porcentagemRoboRat.toFixed(2) + "%" + "\nPorcentagem SuperKeyboard: " + porcentagemSuperKeyboard.toFixed(2) + "%" + "\nPorcentagem votos inválidos: " + porcentagemInvalidos.toFixed(2) + "%");

alert("Porcentagem RoboRat (votos válidos): " + porcentagemRoboRatValidos.toFixed(2) + "%" + "\nPorcentagem SuperKeyboard (votos válidos): " + porcentagemSuperKeyboardValidos.toFixed(2) + "%");

if (porcentagemRoboRatValidos > porcentagemSuperKeyboardValidos) {
    alert("O novo mascote será o RoboRat!");
} else if (porcentagemSuperKeyboardValidos > porcentagemRoboRatValidos) {
    alert("O novo mascote será o SuperKeyboard!");
} else {
    alert("Houve um empate!");
}
