let escolhaUsuario = prompt("Escolha: Pedra, Papel ou Tesoura:");
let opcoes = ["Pedra", "Papel", "Tesoura"];
let escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

alert("Escolha do computador: " + escolhaComputador);

if (escolhaUsuario === escolhaComputador) {
    alert("Empate!");
} else if (
    (escolhaUsuario === "Pedra" && escolhaComputador === "Tesoura") ||
    (escolhaUsuario === "Papel" && escolhaComputador === "Pedra") ||
    (escolhaUsuario === "Tesoura" && escolhaComputador === "Papel")
) {
    alert("Você ganhou!");
} else {
    alert("Você perdeu!");
}
